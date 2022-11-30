

export class ListEventRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public recent?: ListEventRequestRecentEnum;
    public from?: number;
    public to?: number;
    public attacks?: Array<string>;
    public hosts?: Array<string>;
    public page?: number;
    public pagesize?: number;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListEventRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListEventRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withRecent(recent: ListEventRequestRecentEnum): ListEventRequest {
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
