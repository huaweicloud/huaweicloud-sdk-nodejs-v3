

export class ListCacheDatasRequest {
    public projectUUId?: string;
    public type?: string;
    public constructor() { 
    }
    public withProjectUUId(projectUUId: string): ListCacheDatasRequest {
        this['projectUUId'] = projectUUId;
        return this;
    }
    public withType(type: string): ListCacheDatasRequest {
        this['type'] = type;
        return this;
    }
}