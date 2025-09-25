

export class SecurityReportContentResponseReportContentInfoTopAttackedDomainsInfoList {
    public key?: string;
    public num?: number;
    private 'web_tag'?: string;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoTopAttackedDomainsInfoList {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoTopAttackedDomainsInfoList {
        this['num'] = num;
        return this;
    }
    public withWebTag(webTag: string): SecurityReportContentResponseReportContentInfoTopAttackedDomainsInfoList {
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