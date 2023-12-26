import plugin from '../../../lib/plugins/plugin.js';
import set from '../utils/setting.js'
import fs from 'node:fs';
import _ from 'lodash'

const _path = process.cwd();
const generalPath = `${_path}/plugins/limit/general`
const extensionPath = `${_path}/plugins/limit/extension`
const miaoPath = `${_path}/plugins/miao-plugin/resources/meta-gs`

var startReplace = set.getConfig('limitStart')?.startReplace;
var versionReplace = set.getConfig('limitStart')?.versionReplace;

export class limitstart extends plugin {
  constructor() {
    super({
      name: 'limit启动',
      dsc: '载入极限面板',
      event: 'message',
      priority: -5000,
      rule: [
        {
          reg: '^#?通用(替换|初始化)$',
          fnc: 'generalPl',
          permission: 'master'
        },
        {
          reg: '^#?扩展(替换|初始化)$',
          fnc: 'extensionPl',
          permission: 'master'
        },
        {
          reg: '^#?(limit|lp)设置(自动|开机|启动)?替换(开启|关闭)$',
          fnc: 'startSet',
          permission: 'master'
        },
        {
          reg: '^#?(limit|lp)设置(自动|开机|启动)?替换(通用|扩展)$',
          fnc: 'versionSet',
          permission: 'master'
        },
        {
          reg: '^#?(limit|lp)查看(当前)?设置$',
          fnc: 'seeSet',
          permission: 'master'
        }
      ],
    })
    this.key = 'Yz:restart'
  }

  async seeSet (e) {
    let versRpc = versionReplace;
		e.reply('[limit]当前设置\n' + '自动替换开关:' + startReplace + '\n自动替换版本:' + versRpc,true)
  }

  async startSet (e) {
	  let msg = e.msg.replace(/^#?(limit|lp)设置(自动|开机|启动)?替换/g, '');
    if (msg === '开启'){
      let newREG = new RegExp('(limit|lp)设置(自动|开机|启动)?替换$', 'g');
      let setting = './plugins/limit/config/limitStart.yaml'
      let config = fs.readFileSync(setting, 'utf8')
        newREG = new RegExp('startReplace: \\w+','g')
        config = config.replace(newREG,'startReplace: ' + 'true')
        fs.writeFileSync(setting, config, 'utf8')
      startReplace = true;
		  e.reply('已开启自动替换')
		  return true;
    } else {
	    let newREG = new RegExp('(limit|lp)设置(自动|开机|启动)?替换$', 'g');
      let setting = './plugins/limit/config/limitStart.yaml'
      let config = fs.readFileSync(setting, 'utf8')
        newREG = new RegExp('startReplace: \\w+','g')
        config = config.replace(newREG,'startReplace: ' + 'false')
        fs.writeFileSync(setting, config, 'utf8')
      startReplace = false;
		  e.reply('自动替换已关闭')
		  return true;
    }
  }

  async versionSet (e) {
	  let msg = e.msg.replace(/^#?(limit|lp)设置(自动|开机|启动)?替换/g, '');
    if (startReplace === false){
		  e.reply('请先发送【#lp设置替换开启】开启自动替换后再进行替换版本设置')
		  return true;
    }
    if (msg === '通用'){
	    let newREG = new RegExp('(limit|lp)设置(自动|开机|启动)?替换$', 'g');
      let setting = './plugins/limit/config/limitStart.yaml'
      let config = fs.readFileSync(setting, 'utf8')
        newREG = new RegExp('versionReplace: \\w+','g')
        config = config.replace(newREG,'versionReplace: ' + 'general')
        fs.writeFileSync(setting, config, 'utf8')
      versionReplace = 'general';
		  e.reply('自动替换已设置通用')
		  return true;
    } else {
	    let newREG = new RegExp('(limit|lp)设置(自动|开机|启动)?替换$', 'g');
      let setting = './plugins/limit/config/limitStart.yaml'
      let config = fs.readFileSync(setting, 'utf8')
        newREG = new RegExp('versionReplace: \\w+','g')
        config = config.replace(newREG,'versionReplace: ' + 'extension')
        fs.writeFileSync(setting, config, 'utf8')
      versionReplace = 'extension';
		  e.reply('自动替换已设置扩展')
		  return true;
    }
  }

  async generalPl () {
    this.generalPanel()
    this.setContext('hei');
    await this.e.reply(`极限面板(通用)替换成功  ✅\n是否重启云崽以载入数据[重启请发【是】]`, true)
      this.timer = setTimeout(() => {
      this.timer = null;
      }, this.waitingTime);
  }

  async extensionPl () {
    this.extensionPanel()
    this.setContext('hei');
    await this.e.reply(`拓展极限面板(扩展)替换成功  ✅\n是否重启云崽以载入数据[重启请发【是】]`, true)
        this.timer = setTimeout(() => {
        this.timer = null;
        }, this.waitingTime);
  }

  startTimer() {
    this.timer = setInterval(() => {
    let now = Date.now();
      for (let user_id in this.timeout) {
        if (this.timeout < now) {
          this.e.reply("操作超时已取消"); //发送超时消息给用户
          this.timeout = null;
        }
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  async init () {
    this.auto()
    let restart = await redis.get(this.key)
    if (restart) {
      restart = JSON.parse(restart)
      let time = restart.time || new Date().getTime()
      time = (new Date().getTime() - time) / 1000

      let msg = `重启成功：耗时${time.toFixed(2)}秒`

      if (restart.isGroup) {
        Bot.pickGroup(restart.id).sendMsg(msg)
      } else {
        Bot.pickUser(restart.id).sendMsg(msg)
      }
      redis.del(this.key)
    }
  }

  async hei () {
    let msg = this.e.msg;
    if(msg == '是'){
    await this.e.reply('开始执行重启，请稍等...')
    logger.mark(`[limit]开始执行重启，请稍等...`)
    this.restartApp()
    this.finish('hei')
   } else {
     await this.e.reply('重启操作已取消，请手动重启以载入数据')
     this.finish('hei')
   }
  }

  async restartApp() {
    setTimeout(() => this.restart(), 1000)
  }

  auto() {
    if (startReplace === true) {
      if (versionReplace === 'general') {
        this.generalPanel()
        logger.mark('[limit]通用版本自动刷新完成')
      } else {
        this.extensionPanel()
        logger.mark('[limit]扩展版本自动刷新完成')
      }
    } else {
      return false;
    }
  }

  restart() {
    new Restart(this.e).restart()
  }

  generalPanel() {
    const replaceFiles = [
      {
        limit: `${generalPath}/gs`,
        miao: `${_path}/data/PlayerData/gs`,
        type: '.json'
      }, {
        limit: `${generalPath}/sr`,
        miao: `${_path}/data/PlayerData/sr`,
        type: '.json'
      }
    ]

    _.each(replaceFiles, v => {
      let _files = fs.readdirSync(v.limit).filter(file => file.includes(v.type))
      _.each(_files, f => {
        fs.copyFileSync(`${v.limit}/${f}`, `${v.miao}/${f}`)
      })
    })
  }

  extensionPanel() {
    const replaceFiles = [
      {
        limit: `${extensionPath}`,
        miao: `${_path}/data/PlayerData/gs`,
        type: '.json'
      }, {
        limit: `${generalPath}/sr`,
        miao: `${_path}/data/PlayerData/sr`,
        type: '.json'
      }, {
        limit: `${extensionPath}/artifact`,
        miao: `${miaoPath}/artifact`,
        type: '.js'
      }, {
        limit: `${extensionPath}/character`,
        miao: `${miaoPath}/character`,
        type: '.json'
      }, {
        limit: `${extensionPath}/character`,
        miao: `${miaoPath}/character`,
        type: '.js'
      }
    ]

    _.each(replaceFiles, v => {
      let _files = fs.readdirSync(v.limit).filter(file => file.includes(v.type))
      _.each(_files, f => {
        fs.copyFileSync(`${v.limit}/${f}`, `${v.miao}/${f}`)
      })
    })
  }
}
