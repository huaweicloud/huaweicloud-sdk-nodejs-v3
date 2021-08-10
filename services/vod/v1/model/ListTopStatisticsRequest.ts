

export class ListTopStatisticsRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public domain: string;
    public date: string;
    public constructor(domain?: any, date?: any) { 
        this['domain'] = domain;
        this['date'] = date;
    }
    public withAuthorization(authorization: string): ListTopStatisticsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListTopStatisticsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
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