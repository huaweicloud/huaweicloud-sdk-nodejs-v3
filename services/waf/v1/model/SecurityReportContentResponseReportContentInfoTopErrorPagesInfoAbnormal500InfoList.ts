

export class SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal500InfoList {
    public key?: string;
    public num?: number;
    public host?: string;
    private 'web_tag'?: string;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal500InfoList {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal500InfoList {
        this['num'] = num;
        return this;
    }
    public withHost(host: string): SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal500InfoList {
        this['host'] = host;
        return this;
    }
    public withWebTag(webTag: string): SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal500InfoList {
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