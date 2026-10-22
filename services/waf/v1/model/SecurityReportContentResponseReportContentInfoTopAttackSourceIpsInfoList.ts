

export class SecurityReportContentResponseReportContentInfoTopAttackSourceIpsInfoList {
    public key?: string;
    public num?: number;
    public host?: string;
    private 'web_tag'?: string;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoTopAttackSourceIpsInfoList {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoTopAttackSourceIpsInfoList {
        this['num'] = num;
        return this;
    }
    public withHost(host: string): SecurityReportContentResponseReportContentInfoTopAttackSourceIpsInfoList {
        this['host'] = host;
        return this;
    }
    public withWebTag(webTag: string): SecurityReportContentResponseReportContentInfoTopAttackSourceIpsInfoList {
        this['web_tag'] = webTag;
        return this;
    }
    public set webTag(webTag: string  | undefined) {
        this['web_tag'] = webTag;
    }
    public get webTag(): string | undefined {
        return this['web_tag'];
    }
}