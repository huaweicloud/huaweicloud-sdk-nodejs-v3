

export class ListJobsRequest {
    public type?: string;
    public limit?: number;
    public offset?: number;
    public since?: number;
    public until?: number;
    public resource?: string;
    public name?: string;
    public constructor() { 
    }
    public withType(type: string): ListJobsRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ListJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withSince(since: number): ListJobsRequest {
        this['since'] = since;
        return this;
    }
    public withUntil(until: number): ListJobsRequest {
        this['until'] = until;
        return this;
    }
    public withResource(resource: string): ListJobsRequest {
        this['resource'] = resource;
        return this;
    }
    public withName(name: string): ListJobsRequest {
        this['name'] = name;
        return this;
    }
}