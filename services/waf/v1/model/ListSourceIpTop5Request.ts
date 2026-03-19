

export class ListSourceIpTop5Request {
    private 'Content-Type'?: string;
    public recent?: ListSourceIpTop5RequestRecentEnum | string;
    public from?: number;
    public to?: number;
    public top?: number;
    public hosts?: Array<string>;
    public instances?: Array<string>;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListSourceIpTop5Request {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withRecent(recent: ListSourceIpTop5RequestRecentEnum | string): ListSourceIpTop5Request {
        this['recent'] = recent;
        return this;
    }
    public withFrom(from: number): ListSourceIpTop5Request {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListSourceIpTop5Request {
        this['to'] = to;
        return this;
    }
    public withTop(top: number): ListSourceIpTop5Request {
        this['top'] = top;
        return this;
    }
    public withHosts(hosts: Array<string>): ListSourceIpTop5Request {
        this['hosts'] = hosts;
        return this;
    }
    public withInstances(instances: Array<string>): ListSourceIpTop5Request {
        this['instances'] = instances;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSourceIpTop5RequestRecentEnum {
    YESTERDAY = 'yesterday',
    TODAY = 'today',
    E_3DAYS = '3days',
    E_1WEEK = '1week',
    E_1MONTH = '1month'
}
