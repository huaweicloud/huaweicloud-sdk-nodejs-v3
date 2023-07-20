

export class ListTopStatisticsRequest {
    private 'X-Sdk-Date'?: string;
    public domain?: string;
    public date?: string;
    public constructor(domain?: string, date?: string) { 
        this['domain'] = domain;
        this['date'] = date;
    }
    public withXSdkDate(xSdkDate: string): ListTopStatisticsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withDomain(domain: string): ListTopStatisticsRequest {
        this['domain'] = domain;
        return this;
    }
    public withDate(date: string): ListTopStatisticsRequest {
        this['date'] = date;
        return this;
    }
}