

export class Locale {
    private 'en_us'?: string;
    private 'zh_cn'?: string;
    public constructor() { 
    }
    public withEnUs(enUs: string): Locale {
        this['en_us'] = enUs;
        return this;
    }
    public set enUs(enUs: string  | undefined) {
        this['en_us'] = enUs;
    }
    public get enUs(): string | undefined {
        return this['en_us'];
    }
    public withZhCn(zhCn: string): Locale {
        this['zh_cn'] = zhCn;
        return this;
    }
    public set zhCn(zhCn: string  | undefined) {
        this['zh_cn'] = zhCn;
    }
    public get zhCn(): string | undefined {
        return this['zh_cn'];
    }
}