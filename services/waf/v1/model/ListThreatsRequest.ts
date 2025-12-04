

export class ListThreatsRequest {
    private 'Content-Type'?: string;
    public recent?: string;
    public hosts?: Array<string>;
    public constructor(contentType?: string, recent?: string) { 
        this['Content-Type'] = contentType;
        this['recent'] = recent;
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
    public withRecent(recent: string): ListThreatsRequest {
        this['recent'] = recent;
        return this;
    }
    public withHosts(hosts: Array<string>): ListThreatsRequest {
        this['hosts'] = hosts;
        return this;
    }
}