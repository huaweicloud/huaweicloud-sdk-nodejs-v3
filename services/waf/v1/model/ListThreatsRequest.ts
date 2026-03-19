

export class ListThreatsRequest {
    private 'Content-Type'?: string;
    public recent?: ListThreatsRequestRecentEnum | string;
    public from?: number;
    public to?: number;
    public hosts?: Array<string>;
    public instances?: Array<string>;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListThreatsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withRecent(recent: ListThreatsRequestRecentEnum | string): ListThreatsRequest {
        this['recent'] = recent;
        return this;
    }
    public withFrom(from: number): ListThreatsRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListThreatsRequest {
        this['to'] = to;
        return this;
    }
    public withHosts(hosts: Array<string>): ListThreatsRequest {
        this['hosts'] = hosts;
        return this;
    }
    public withInstances(instances: Array<string>): ListThreatsRequest {
        this['instances'] = instances;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListThreatsRequestRecentEnum {
    YESTERDAY = 'yesterday',
    TODAY = 'today',
    E_3DAYS = '3days',
    E_1WEEK = '1week',
    E_1MONTH = '1month'
}
