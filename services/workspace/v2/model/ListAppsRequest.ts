

export class ListAppsRequest {
    public offset?: number;
    public limit?: number;
    public name?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListAppsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAppsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListAppsRequest {
        this['name'] = name;
        return this;
    }
}