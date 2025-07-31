

export class WebSiteStatisticsResponseInfo {
    public domain?: string;
    public num?: number;
    public constructor() { 
    }
    public withDomain(domain: string): WebSiteStatisticsResponseInfo {
        this['domain'] = domain;
        return this;
    }
    public withNum(num: number): WebSiteStatisticsResponseInfo {
        this['num'] = num;
        return this;
    }
}