export class limit extends plugin {
	constructor() {
		super({
			name: 'InputReplace',
			dsc: '输入替换',
			event: 'message',
			priority: -10
		})
	}
	accept(e) {
		try {
			if (/#*(星铁)?极限(面板)?/.test(e.msg)) {
                e.msg = e.msg.replace(/#*(星铁)?极限(面板)?/g, '');
                e.msg =  `#${e.msg}面板100000000`
			}
		} catch (err) { }
		return false;
	}
}
