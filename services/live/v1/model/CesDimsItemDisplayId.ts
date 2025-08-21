

export class CesDimsItemDisplayId {
    private 'zh-cn'?: string;
    private 'en-us'?: string;
    public constructor(zhCn?: string, enUs?: string) { 
        this['zh-cn'] = zhCn;
        this['en-us'] = enUs;
    }
    public withZhCn(zhCn: string): CesDimsItemDisplayId {
        this['zh-cn'] = zhCn;
        return this;
    }
    public set zhCn(zhCn: string  | undefined) {
        this['zh-cn'] = zhCn;
    }
    public get zhCn(): string | undefined {
        return this['zh-cn'];
    }
    public withEnUs(enUs: string): CesDimsItemDisplayId {
        this['en-us'] = enUs;
        return this;
    }
    public set enUs(enUs: string  | undefined) {
        this['en-us'] = enUs;
    }
    public get enUs(): string | undefined {
        return this['en-us'];
    }
}