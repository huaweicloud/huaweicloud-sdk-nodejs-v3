

export class ResourcePackageDescription {
    private 'zh_cn'?: string;
    private 'en_us'?: string;
    public constructor() { 
    }
    public withZhCn(zhCn: string): ResourcePackageDescription {
        this['zh_cn'] = zhCn;
        return this;
    }
    public set zhCn(zhCn: string  | undefined) {
        this['zh_cn'] = zhCn;
    }
    public get zhCn(): string | undefined {
        return this['zh_cn'];
    }
    public withEnUs(enUs: string): ResourcePackageDescription {
        this['en_us'] = enUs;
        return this;
    }
    public set enUs(enUs: string  | undefined) {
        this['en_us'] = enUs;
    }
    public get enUs(): string | undefined {
        return this['en_us'];
    }
}