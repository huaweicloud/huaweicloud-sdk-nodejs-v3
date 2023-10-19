

export class QuotaDetail {
    private 'zh_cn'?: string;
    private 'en_us'?: string;
    public remaining?: number;
    public constructor(zhCn?: string, enUs?: string, remaining?: number) { 
        this['zh_cn'] = zhCn;
        this['en_us'] = enUs;
        this['remaining'] = remaining;
    }
    public withZhCn(zhCn: string): QuotaDetail {
        this['zh_cn'] = zhCn;
        return this;
    }
    public set zhCn(zhCn: string  | undefined) {
        this['zh_cn'] = zhCn;
    }
    public get zhCn(): string | undefined {
        return this['zh_cn'];
    }
    public withEnUs(enUs: string): QuotaDetail {
        this['en_us'] = enUs;
        return this;
    }
    public set enUs(enUs: string  | undefined) {
        this['en_us'] = enUs;
    }
    public get enUs(): string | undefined {
        return this['en_us'];
    }
    public withRemaining(remaining: number): QuotaDetail {
        this['remaining'] = remaining;
        return this;
    }
}