import plugin from '../../../lib/plugins/plugin.js';
import fs from 'node:fs';
import path from 'path';
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const { exec } = require('child_process')

const _path = process.cwd();
const gr_path = process.cwd() + '/plugins/limit/general';
const es_path = process.cwd() + '/plugins/limit/extension';
const miao_path = process.cwd() + '/plugins/miao-plugin/resources/meta-gs';
const srFile = path.join(`${gr_path}/sr`, `100000000.json`);
const miaogsFile = path.join(`${_path}/data/PlayerData/gs`, `100000000.json`);
const miaosrFile = path.join(`${_path}/data/PlayerData/sr`, `100000000.json`);

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
          fnc: 'generalpanel',
          permission: 'master'
        },
        {
          reg: '^#?扩展(替换|初始化)$',
          fnc: 'extensionpanel',
          permission: 'master'
        }
      ],
    })
    this.key = 'Yz:restart'
  }

  async generalpanel() {
    const grFile0 = path.join(`${gr_path}`, `100000000.json`)
    fs.copyFile(grFile0, miaogsFile, (err) => {
      if (err) throw err
    })
    fs.copyFile(srFile, miaosrFile, (err) => {
      if (err) throw err
    })
    this.setContext('hei');
    await this.e.reply(`极限面板(通用)替换成功  ✅\n是否重启云崽以载入数据[重启请发【是】]`, true)
      this.timer = setTimeout(() => {
      this.timer = null;
      }, this.waitingTime);
  }

  async extensionpanel() {
    const esFile0 = path.join(`${_path}/plugins/limit/extension`, `100000000.json`)
    const miaoFile1 = path.join(`${miao_path}/artifact`, `artis-mark.js`)
    const esFile1 = path.join(`${es_path}`, `artis-mark.js`)
    const miaoFile2 = path.join(`${miao_path}/character`, `alias.js`)
    const esFile2 = path.join(`${es_path}`, `alias.js`)
    const miaoFile3 = path.join(`${miao_path}/character`, `data.json`)
    const esFile3 = path.join(`${es_path}`, `data.json`)
    const miaoFile4 = path.join(`${miao_path}/character`, `extra.js`)
    const esFile4 = path.join(`${es_path}`, `extra.js`)
    fs.copyFile(srFile, miaosrFile, (err) => {
      if (err) throw err
    })
    fs.copyFile(esFile0, miaogsFile, (err) => {
      if (err) throw err
    })
    fs.copyFile(esFile1, miaoFile1, (err) => {
      if (err) throw err
    })
    fs.copyFile(esFile2, miaoFile2, (err) => {
      if (err) throw err
    })
    fs.copyFile(esFile3, miaoFile3, (err) => {
      if (err) throw err
    })
    fs.copyFile(esFile4, miaoFile4, (err) => {
      if (err) throw err
    })
    this.setContext('hei');
    await this.e.reply(`拓展极限面板(扩展)替换成功  ✅\n是否重启云崽以载入数据[重启请发【是】]`, true)
        this.timer = setTimeout(() => {
        this.timer = null;
        }, this.waitingTime);
  }

  startTimer () {
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

  stopTimer () {
    clearInterval(this.timer);
    this.timer = null;
  }

  async init () {
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

  async hei(e) {
    let msg = this.e.msg;
    if(msg == '是'){
    await this.e.reply('开始执行重启，请稍等...')
    logger.mark(`${this.e.logFnc} 开始执行重启，请稍等...`)
    let data = JSON.stringify({
      isGroup: !!this.e.isGroup,
      id: this.e.isGroup ? this.e.group_id : this.e.user_id,
      time: new Date().getTime()
    })
    let npm = await this.checkPnpm()
    try {
      await redis.set(this.key, data, { EX: 120 })
      let cm = `${npm} start`
      if (process.argv[1].includes('pm2')) {
        cm = `${npm} run restart`
      }
      exec(cm, { windowsHide: true }, (error, stdout, stderr) => {
        if (error) {
          redis.del(this.key)
          this.e.reply(`操作失败！\n${error.stack}`)
          logger.error(`重启失败\n${error.stack}`)
        } else if (stdout) {
          logger.mark('重启成功，运行已由前台转为后台')
          logger.mark(`查看日志请用命令：${npm} run log`)
          logger.mark(`停止后台运行命令：${npm} stop`)
          process.exit()
        }
      })
    } catch (error) {
      redis.del(this.key)
      let e = error.stack ?? error
      this.e.reply(`操作失败！\n${e}`)
    }
    this.finish('hei')
   } else {
     await this.e.reply('重启操作已取消，请手动重启以载入数据')
     this.finish('hei')
   }
  }

  async checkPnpm () {
    let npm = 'npm'
    let ret = await this.execSync('pnpm -v')
    if (ret.stdout) npm = 'pnpm'
    return npm
  }

  async execSync (cmd) {
    return new Promise((resolve, reject) => {
      exec(cmd, { windowsHide: true }, (error, stdout, stderr) => {
        resolve({ error, stdout, stderr })
      })
    })
  }
}
