

export class SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal502InfoList {
    public key?: string;
    public num?: number;
    public host?: string;
    private 'web_tag'?: string;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal502InfoList {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal502InfoList {
        this['num'] = num;
        return this;
    }
    public withHost(host: string): SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal502InfoList {
        this['host'] = host;
        return this;
    }
    public withWebTag(webTag: string): SecurityReportContentResponseReportContentInfoTopErrorPagesInfoAbnormal502InfoList {
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