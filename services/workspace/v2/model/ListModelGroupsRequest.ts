

export class ListModelGroupsRequest {
    public offset?: number;
    public limit?: number;
    public name?: string;
    public status?: ListModelGroupsRequestStatusEnum | string;
    public constructor() { 
    }
    public withOffset(offset: number): ListModelGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListModelGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListModelGroupsRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ListModelGroupsRequestStatusEnum | string): ListModelGroupsRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListModelGroupsRequestStatusEnum {
    DRAFT = 'draft',
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    DEPRECATED = 'deprecated'
}
