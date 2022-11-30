

export class ListApplicationsRequest {
    public offset?: number;
    public limit?: number;
    public name?: string;
    public platform?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListApplicationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApplicationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListApplicationsRequest {
        this['name'] = name;
        return this;
    }
    public withPlatform(platform: string): ListApplicationsRequest {
        this['platform'] = platform;
        return this;
    }
}