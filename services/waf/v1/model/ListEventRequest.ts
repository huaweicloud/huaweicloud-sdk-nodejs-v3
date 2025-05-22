

export class ListEventRequest {
    private 'Content-Type'?: string;
    private 'X-Language'?: string;
    private 'enterprise_project_id'?: string;
    public recent?: ListEventRequestRecentEnum | string;
    public from?: number;
    public to?: number;
    public attacks?: Array<string>;
    public hosts?: Array<string>;
    public sips?: Array<string>;
    public page?: number;
    public pagesize?: number;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListEventRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXLanguage(xLanguage: string): ListEventRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListEventRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRecent(recent: ListEventRequestRecentEnum | string): ListEventRequest {
        this['recent'] = recent;
        return this;
    }
    public withFrom(from: number): ListEventRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListEventRequest {
        this['to'] = to;
        return this;
    }
    public withAttacks(attacks: Array<string>): ListEventRequest {
        this['attacks'] = attacks;
        return this;
    }
    public withHosts(hosts: Array<string>): ListEventRequest {
        this['hosts'] = hosts;
        return this;
    }
    public withSips(sips: Array<string>): ListEventRequest {
        this['sips'] = sips;
        return this;
    }
    public withPage(page: number): ListEventRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListEventRequest {
        this['pagesize'] = pagesize;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEventRequestRecentEnum {
    YESTERDAY = 'yesterday',
    TODAY = 'today',
    E_3DAYS = '3days',
    E_1WEEK = '1week',
    E_1MONTH = '1month'
}
