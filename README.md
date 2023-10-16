<div align=center> <h1>极限面板</h1> </div>

<div align="center">

[![访问量](https://profile-counter.glitch.me/limit/count.svg)](https://gitee.com/actually-the-rain-is-good/limit)

[![](https://img.shields.io/badge/Yunzai-v3-yellow)](https://gitee.com/Le-niao/Yunzai-Bot)
[![](https://img.shields.io/badge/Miao﹣­­­­­­Yunzai-v3.1.1-yellow)](https://gitee.com/yoimiya-kokomi/Miao-Yunzai)
[![](https://img.shields.io/badge/TRSS﹣­­­­­­Yunzai-v3.1.1-yellow)](https://gitee.com/TimeRainStarSky/Yunzai)
[![](https://img.shields.io/badge/Author-其实雨很好-red)](https://gitee.com/actually-the-rain-is-good)
<a href='https://gitee.com/actually-the-rain-is-good/limit/stargazers'><img src='https://gitee.com/actually-the-rain-is-good/limit//badge/star.svg?theme=dark' alt='star'></img></a>
</div>

## 项目介绍

喵喵插件原神/星铁极限面板，此仓库会同步卡池更新。

## 功能

- [x] 原神极限双爆面板
- [ ] 原神极限辅助面板
- [ ] 原神扩展角色/原魔图鉴
    - [x] 派蒙
    - [ ] 天理(准备重置为仅火元素形态)
- [x] 星铁极限面板
- [x] 命令替换

## 克隆方式

### 1.使用命令克隆(推荐,后续可更新)

克隆命令,根目录执行

gitee:

```
git clone --depth=1 https://gitee.com/actually-the-rain-is-good/limit.git ./plugins/limit
```

github:

```
git clone --depth=1 https://github.com/actually-the-rain-is-good/limit.git ./plugins/limit
```

### 2.直接克隆(不推荐,每次更新只能重新下载压缩包)

[点击下载zip文件](https://gitee.com/actually-the-rain-is-good/limit/repository/archive/master.zip)

下载解压后务必将文件名改为`limit`(否则会导致载入插件错误或命令替换不成功)，然后放到根目录下plugins文件夹中

## 使用方法

分为两个版本，选择其一(无论替换哪一个版本,星铁极限都会替换)

##### 1.general版本(该版本为通用版本，仅会更新原神可获得的角色。)

* 可发送`#通用替换`进行文件替换，然后回复 `是`进行重启以应用

##### 2.extension版本(该版本为扩展版本，会更新更多角色如派蒙(已更新)、女士(已更新)、天理....)

* 使用该版本需先将插件目录下【extension】文件中【character】文件夹复制到【miao-plugin/resources/meta】下

* 发送`#扩展替换`进行相关文件替换，然后回复`是`进行重启以应用

## 后续更新

推荐使用本插件的更新命令`#limit更新`/`#lp更新`,更新之后不会自动重启,如有更新可发送`#通用替换`/`#扩展替换`进行文件替换,然后回复`是`进行重启以应用

机器人启动后，发送`极限xx`即可查看该角色的极限面板

## 功能建议/错误反馈

- 注:若发送替换命令后未重启,发送`极限xx`可能会出现替换的面板数据被重置为1kb文件,从而出现角色未放置展柜或者本地暂无uid100000000的面板数据的情况,请重新命令替换并重启以应用更新。

- QQ交流群:[751976647](https://qm.qq.com/q/k6jV4bvLEW)

- 由于extension版本没有素材,后续角色会更新很慢,如有天赋和命座素材可在[issuer](https://gitee.com/actually-the-rain-is-good/limit/issues)中分享你的素材或说明是哪个角色的素材，并加注QQ号(其他账号请另说明)

- 如果有一些不准确的地方可以提[issuer](https://gitee.com/actually-the-rain-is-good/limit/issues)如果合理有用我会在下一次更新中修改

### 鸣谢
- 部分代码及素材来自[Miao-Yunzai](https://gitee.com/yoimiya-kokomi/Miao-Yunzai),[Miao-Plugin](https://gitee.com/yoimiya-kokomi/miao-plugin),[liangshi-calc](https://gitee.com/liangshi233/liangshi-calc)，特在此声明感谢。

## 相关链接
1.[云崽主体](https://gitee.com/Le-niao/Yunzai-Bot)

2.[喵云崽](https://gitee.com/yoimiya-kokomi/Yunzai-Bot)

3.[喵崽](https://gitee.com/yoimiya-kokomi/Miao-Yunzai)

4.[云崽插件索引](https://gitee.com/yhArcadia/Yunzai-Bot-plugins-index)