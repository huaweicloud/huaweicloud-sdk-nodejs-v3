

export class SecurityReportContentResponseReportContentInfoTopDomains {
    public key?: string;
    public num?: number;
    public host?: string;
    private 'web_tag'?: string;
    private 'block_num'?: number;
    private 'only_log_num'?: number;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoTopDomains {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoTopDomains {
        this['num'] = num;
        return this;
    }
    public withHost(host: string): SecurityReportContentResponseReportContentInfoTopDomains {
        this['host'] = host;
        return this;
    }
    public withWebTag(webTag: string): SecurityReportContentResponseReportContentInfoTopDomains {
        this['web_tag'] = webTag;
        return this;
    }
    public set webTag(webTag: string  | undefined) {
        this['web_tag'] = webTag;
    }
    public get webTag(): string | undefined {
        return this['web_tag'];
    }
    public withBlockNum(blockNum: number): SecurityReportContentResponseReportContentInfoTopDomains {
        this['block_num'] = blockNum;
        return this;
    }
    public set blockNum(blockNum: number  | undefined) {
        this['block_num'] = blockNum;
    }
    public get blockNum(): number | undefined {
        return this['block_num'];
    }
    public withOnlyLogNum(onlyLogNum: number): SecurityReportContentResponseReportContentInfoTopDomains {
        this['only_log_num'] = onlyLogNum;
        return this;
    }
    public set onlyLogNum(onlyLogNum: number  | undefined) {
        this['only_log_num'] = onlyLogNum;
    }
    public get onlyLogNum(): number | undefined {
        return this['only_log_num'];
    }
}