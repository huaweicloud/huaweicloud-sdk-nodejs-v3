

export class SecurityReportContentResponseReportContentInfoTopDomains {
    public num?: number;
    public host?: string;
    public constructor() { 
    }
    public withNum(num: number): SecurityReportContentResponseReportContentInfoTopDomains {
        this['num'] = num;
        return this;
    }
    public withHost(host: string): SecurityReportContentResponseReportContentInfoTopDomains {
        this['host'] = host;
        return this;
    }
}