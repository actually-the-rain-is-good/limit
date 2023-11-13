import setting from './utils/setting.js'
import lodash from 'lodash'
import { pluginResources } from './utils/path.js'
import path from 'path'

// 支持锅巴
export function supportGuoba () {
  let allGroup = []
  Bot.gl.forEach((v, k) => { allGroup.push({ label: `${v.group_name}(${k})`, value: k }) })
  return {
    pluginInfo: {
      name: 'limit',
      title: 'limit',
      author: '@其实雨很好',
      authorLink: 'https://gitee.com/actually-the-rain-is-good',
      link: 'https://gitee.com/actually-the-rain-is-good/limit',
      isV3: true,
      isV2: false,
      description: '极限面板',
      icon: 'bi:box-seam',
      iconColor: '#7ed99e',
      iconPath: path.join(pluginResources, 'common/cont/pamu.png')
    },
    // 配置项信息
    configInfo: {
      schemas: [{
        component: 'Divider',
        label: '通用设置'
      },
      {
        field: 'limitStart.startReplace',
        label: '替换开关',
        bottomHelpMessage: '是否开启自动替换',
        component: 'Switch'
      },
      {
          field: 'limitStart.versionReplace',
          label: '替换版本',
          bottomHelpMessage: '请选择自动替换版本',
          component: 'RadioGroup',
          componentProps: {
            options: [
              { label: 'general', value: 'general' },
              { label: 'extension', value: 'extension' },
            ],
          },
        },
      ],
      getConfigData () {
        return setting.merge()
      },
      // 设置配置的方法（前端点确定后调用的方法）
      setConfigData (data, { Result }) {
        let config = {}
        for (let [keyPath, value] of Object.entries(data)) {
          lodash.set(config, keyPath, value)
        }
        config = lodash.merge({}, setting.merge, config)
        setting.analysis(config)
        return Result.ok({}, '保存成功~')
      }
    }
  }
}
