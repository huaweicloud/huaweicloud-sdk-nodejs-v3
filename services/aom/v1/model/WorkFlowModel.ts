

export class WorkFlowModel {
    private 'en-us'?: { [key: string]: string; };
    private 'zh-cn'?: { [key: string]: string; };
    public constructor() { 
    }
    public withEnUs(enUs: { [key: string]: string; }): WorkFlowModel {
        this['en-us'] = enUs;
        return this;
    }
    public set enUs(enUs: { [key: string]: string; }  | undefined) {
        this['en-us'] = enUs;
    }
    public get enUs(): { [key: string]: string; } | undefined {
        return this['en-us'];
    }
    public withZhCn(zhCn: { [key: string]: string; }): WorkFlowModel {
        this['zh-cn'] = zhCn;
        return this;
    }
    public set zhCn(zhCn: { [key: string]: string; }  | undefined) {
        this['zh-cn'] = zhCn;
    }
    public get zhCn(): { [key: string]: string; } | undefined {
        return this['zh-cn'];
    }
}