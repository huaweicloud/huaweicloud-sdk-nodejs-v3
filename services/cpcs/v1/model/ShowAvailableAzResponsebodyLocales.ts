

export class ShowAvailableAzResponsebodyLocales {
    private 'en-us'?: string;
    private 'zh-cn'?: string;
    public constructor() { 
    }
    public withEnUs(enUs: string): ShowAvailableAzResponsebodyLocales {
        this['en-us'] = enUs;
        return this;
    }
    public set enUs(enUs: string  | undefined) {
        this['en-us'] = enUs;
    }
    public get enUs(): string | undefined {
        return this['en-us'];
    }
    public withZhCn(zhCn: string): ShowAvailableAzResponsebodyLocales {
        this['zh-cn'] = zhCn;
        return this;
    }
    public set zhCn(zhCn: string  | undefined) {
        this['zh-cn'] = zhCn;
    }
    public get zhCn(): string | undefined {
        return this['zh-cn'];
    }
}