

export class ListSourceIpTop5Request {
    private 'Content-Type'?: string;
    public recent?: string;
    public hosts?: Array<string>;
    public constructor(contentType?: string, recent?: string, hosts?: Array<string>) { 
        this['Content-Type'] = contentType;
        this['recent'] = recent;
        this['hosts'] = hosts;
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
    public withRecent(recent: string): ListSourceIpTop5Request {
        this['recent'] = recent;
        return this;
    }
    public withHosts(hosts: Array<string>): ListSourceIpTop5Request {
        this['hosts'] = hosts;
        return this;
    }
}