

export class Description {
    private 'en_US'?: string;
    private 'zh_CN'?: string;
    public constructor(enUS?: string, zhCN?: string) { 
        this['en_US'] = enUS;
        this['zh_CN'] = zhCN;
    }
    public withEnUS(enUS: string): Description {
        this['en_US'] = enUS;
        return this;
    }
    public set enUS(enUS: string  | undefined) {
        this['en_US'] = enUS;
    }
    public get enUS(): string | undefined {
        return this['en_US'];
    }
    public withZhCN(zhCN: string): Description {
        this['zh_CN'] = zhCN;
        return this;
    }
    public set zhCN(zhCN: string  | undefined) {
        this['zh_CN'] = zhCN;
    }
    public get zhCN(): string | undefined {
        return this['zh_CN'];
    }
}