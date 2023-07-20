

export class ListElasticResourcePoolsRequest {
    public limit?: number;
    public name?: string;
    public offset?: number;
    public status?: ListElasticResourcePoolsRequestStatusEnum | string;
    public tags?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListElasticResourcePoolsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListElasticResourcePoolsRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListElasticResourcePoolsRequest {
        this['offset'] = offset;
        return this;
    }
    public withStatus(status: ListElasticResourcePoolsRequestStatusEnum | string): ListElasticResourcePoolsRequest {
        this['status'] = status;
        return this;
    }
    public withTags(tags: string): ListElasticResourcePoolsRequest {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListElasticResourcePoolsRequestStatusEnum {
    AVAILABLE = 'AVAILABLE',
    SCALING = 'SCALING',
    CREATING = 'CREATING',
    FAILED = 'FAILED'
}
