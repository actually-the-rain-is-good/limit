const replace_list = {
  极限: '极限'
}

export class limit extends plugin {
	constructor() {
		super({
			name: 'InputReplace',
			dsc: '输入替换',
			event: 'message',
			priority: -10
		})
	}

 async accept (e) {
    for (let key in replace_list) {
      try {
        let reg = RegExp(key)
        if (!reg.test(e.msg)) continue
        let msg = e.msg.split('换')
        let result = msg.map((element) => {
            if (element.includes(key)) {
              return element.replace(key,'100000000');
            } else {
              return element;
            }
        });
        let Msg = msg[0]
        if (/极限/.test(Msg)) {
          Msg = Msg.replace(/#*(星铁)?极限(面板|圣遗物|伤害|武器)?/g, '');
          let mb = `${Msg}${/面板|圣遗物|伤害|武器/.test(Msg) ? '' : '面板'}`
          Msg =  `#${mb}100000000`
        } else {
           Msg = msg[0]
        }
        let filteredMsg = result.filter(element => element !== result[0]);
        filteredMsg = filteredMsg.map((msgs) =>'换' + msgs).join('');
        let msgone = Msg
        if (msg.length > 1) {
          let msgtwo = filteredMsg
          e.msg = msgone + msgtwo
        } else {
          e.msg = msgone
        }
      } catch (err) { }
    }
    return false
  }
}
