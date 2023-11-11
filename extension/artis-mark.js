/**
 * 角色的默认评分规则
 * 如character/${name}/artis.js下有角色自定义规则优先使用自定义
 */
export const usefulAttr = {
  芭芭拉: { hp: 100, atk: 50, cpct: 50, cdmg: 50, dmg: 80, recharge: 55, heal: 100 },
  甘雨: { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100 },
  雷电将军: { atk: 75, cpct: 100, cdmg: 100, mastery: 0, dmg: 75, recharge: 90 },
  神里绫人: { hp: 50, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 30, heal: 0 },
  八重神子: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 75, phy: 0, recharge: 55, heal: 0 },
  申鹤: { hp: 0, atk: 100, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  云堇: { hp: 0, atk: 75, def: 100, cpct: 80, cdmg: 80, mastery: 0, dmg: 80, phy: 0, recharge: 80, heal: 0 },
  荒泷一斗: { hp: 0, atk: 50, def: 100, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 30, heal: 0 },
  五郎: { hp: 0, atk: 75, def: 100, cpct: 50, cdmg: 50, mastery: 0, dmg: 100, phy: 0, recharge: 75, heal: 0 },
  班尼特: { hp: 100, atk: 50, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 80, phy: 0, recharge: 55, heal: 100 },
  枫原万叶: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 100, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  行秋: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 75, heal: 0 },
  钟离: { hp: 80, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 50, recharge: 55, heal: 0 },
  神里绫华: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 30, heal: 0 },
  香菱: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  胡桃: { hp: 80, atk: 50, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 0, heal: 0 },
  温迪: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  珊瑚宫心海: { hp: 100, atk: 50, def: 0, cpct: 0, cdmg: 0, mastery: 75, dmg: 100, phy: 0, recharge: 55, heal: 100 },
  莫娜: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 75, heal: 0 },
  阿贝多: { hp: 0, atk: 0, def: 100, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 0, heal: 0 },
  迪奥娜: { hp: 100, atk: 50, def: 0, cpct: 50, cdmg: 50, mastery: 0, dmg: 100, phy: 0, recharge: 90, heal: 100 },
  优菈: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 40, phy: 100, recharge: 55, heal: 0 },
  达达利亚: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 30, heal: 0 },
  魈: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  宵宫: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 0, heal: 0 },
  九条裟罗: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  琴: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 100, recharge: 55, heal: 100 },
  菲谢尔: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 60, recharge: 0, heal: 0 },
  罗莎莉亚: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 70, phy: 80, recharge: 30, heal: 0 },
  可莉: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 30, heal: 0 },
  凝光: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 30, heal: 0 },
  北斗: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  刻晴: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 100, recharge: 0, heal: 0 },
  托马: { hp: 90, atk: 55, def: 0, cpct: 90, cdmg: 90, mastery: 75, dmg: 90, phy: 0, recharge: 55, heal: 0 },
  迪卢克: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 0, heal: 0 },
  诺艾尔: { hp: 0, atk: 50, def: 90, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 70, heal: 0 },
  旅行者: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  重云: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  七七: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 100, recharge: 55, heal: 100 },
  凯亚: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 100, recharge: 30, heal: 0 },
  烟绯: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 30, heal: 0 },
  早柚: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 100, dmg: 100, phy: 0, recharge: 55, heal: 100 },
  安柏: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 100, recharge: 0, heal: 0 },
  丽莎: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 0, heal: 0 },
  埃洛伊: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 0, heal: 0 },
  辛焱: { hp: 0, atk: 75, def: 75, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 100, recharge: 0, heal: 0 },
  砂糖: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 100, dmg: 75, phy: 0, recharge: 55, heal: 0 },
  雷泽: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 100, recharge: 0, heal: 0 },
  夜兰: { hp: 80, atk: 0, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  久岐忍: { hp: 100, atk: 50, def: 0, cpct: 100, cdmg: 100, mastery: 100, dmg: 100, phy: 0, recharge: 55, heal: 100 },
  鹿野院平藏: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 30, heal: 0 },
  提纳里: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 90, dmg: 100, phy: 0, recharge: 30, heal: 0 },
  柯莱: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 30, heal: 0 },
  赛诺: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  坎蒂丝: { hp: 75, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  妮露: { hp: 100, atk: 0, def: 0, cpct: 100, cdmg: 100, mastery: 80, dmg: 100, phy: 0, recharge: 30, heal: 0 },
  纳西妲: { hp: 0, atk: 55, def: 0, cpct: 100, cdmg: 100, mastery: 100, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  多莉: { hp: 75, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 75, phy: 0, recharge: 55, heal: 100 },
  莱依拉: { hp: 100, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 35 },
  流浪者: { hp: 0, atk: 80, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 35, heal: 0 },
  珐露珊: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 75, heal: 0 },
  瑶瑶: { hp: 100, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 75, heal: 100 },
  艾尔海森: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 100, dmg: 100, phy: 0, recharge: 35, heal: 0 },
  迪希雅: { hp: 75, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 100, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  米卡: { hp: 75, atk: 55, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 75, phy: 75, recharge: 55, heal: 100 },
  白术: { hp: 100, atk: 0, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 75, heal: 100 },
  卡维: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 75, heal: 0 },
  绮良良: { hp: 100, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 0, heal: 0 },
  林尼: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  琳妮特: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  菲米尼: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 100, recharge: 55, heal: 0 },
  那维莱特: { hp: 100, atk: 0, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 75, heal: 0 },
  莱欧斯利: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 55, heal: 0 },
  芙宁娜: { hp: 100, atk: 0, def: 0, cpct: 100, cdmg: 100, mastery: 45, dmg: 100, phy: 0, recharge: 75, heal: 100 },
  夏洛蒂:{ hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 75, heal: 100 },
  派蒙: { hp: 0, atk: 75, def: 0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, phy: 0, recharge: 55, heal: 0 }
}
