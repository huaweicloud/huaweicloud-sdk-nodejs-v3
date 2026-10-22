

export class SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal404InfoList {
    public key?: string;
    public num?: number;
    public host?: string;
    private 'web_tag'?: string;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal404InfoList {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal404InfoList {
        this['num'] = num;
        return this;
    }
    public withHost(host: string): SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal404InfoList {
        this['host'] = host;
        return this;
    }
    public withWebTag(webTag: string): SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal404InfoList {
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