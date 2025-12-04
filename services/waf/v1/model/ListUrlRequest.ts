

export class ListUrlRequest {
    private 'Content-Type'?: string;
    public top?: number;
    public recent?: string;
    public from?: number;
    public to?: number;
    public hosts?: Array<string>;
    public instances?: Array<string>;
    public constructor(contentType?: string, top?: number) { 
        this['Content-Type'] = contentType;
        this['top'] = top;
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
    public withRecent(recent: string): ListUrlRequest {
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