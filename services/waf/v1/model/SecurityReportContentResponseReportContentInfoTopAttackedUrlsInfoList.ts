

export class SecurityReportContentResponseReportContentInfoTopAttackedUrlsInfoList {
    public key?: string;
    public num?: number;
    public host?: string;
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
}