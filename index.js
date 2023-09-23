import fs from 'node:fs'

if (!global.segment) {
  global.segment = (await import("oicq")).segment
}

if (!global.core) {
  try {
    global.core = (await import("oicq")).core
  } catch (err) {}
}

const files = fs.readdirSync('./plugins/limit/apps').filter(file => file.endsWith('.js'))

let ret = []
logger.info(`――――――――――――――――――――――――――――`)
logger.info(`             limit载入中...          `)
logger.info('   Created By 其实雨很好(257800180)   ')
logger.info(`    limit载入成功，感谢您的使用!!!    `)
logger.info(` 仓库地址:https://gitee.com/actually-the-rain-is-good/limit`)
logger.info(`――――――――――――――――――――――――――――`)
files.forEach((file) => {
    ret.push(import(`./apps/${file}`))
  })
  
  ret = await Promise.allSettled(ret)
  
  let apps = {}
  for (let i in files) {
    let name = files[i].replace('.js', '')
  
    if (ret[i].status != 'fulfilled') {
      logger.error(`载入插件错误：${logger.red(name)}`)
      logger.error(ret[i].reason)
      continue
    }
    apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
  }
  export { apps }
