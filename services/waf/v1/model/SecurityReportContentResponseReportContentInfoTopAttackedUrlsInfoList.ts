

export class SecurityReportContentResponseReportContentInfoTopAttackedUrlsInfoList {
    public key?: string;
    public num?: number;
    public host?: string;
    private 'web_tag'?: string;
    public constructor() { 
    }
    public withKey(key: string): SecurityReportContentResponseReportContentInfoTopAttackedUrlsInfoList {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoTopAttackedUrlsInfoList {
        this['num'] = num;
        return this;
    }
    public withHost(host: string): SecurityReportContentResponseReportContentInfoTopAttackedUrlsInfoList {
        this['host'] = host;
        return this;
    }
    public withWebTag(webTag: string): SecurityReportContentResponseReportContentInfoTopAttackedUrlsInfoList {
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