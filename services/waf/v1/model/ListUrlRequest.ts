

export class ListUrlRequest {
    private 'Content-Type'?: string;
    public top?: number;
    public recent?: ListUrlRequestRecentEnum | string;
    public from?: number;
    public to?: number;
    public hosts?: Array<string>;
    public instances?: Array<string>;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListUrlRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withTop(top: number): ListUrlRequest {
        this['top'] = top;
        return this;
    }
    public withRecent(recent: ListUrlRequestRecentEnum | string): ListUrlRequest {
        this['recent'] = recent;
        return this;
    }
    public withFrom(from: number): ListUrlRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListUrlRequest {
        this['to'] = to;
        return this;
    }
    public withHosts(hosts: Array<string>): ListUrlRequest {
        this['hosts'] = hosts;
        return this;
    }
    public withInstances(instances: Array<string>): ListUrlRequest {
        this['instances'] = instances;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListUrlRequestRecentEnum {
    YESTERDAY = 'yesterday',
    TODAY = 'today',
    E_3DAYS = '3days',
    E_1WEEK = '1week',
    E_1MONTH = '1month'
}
