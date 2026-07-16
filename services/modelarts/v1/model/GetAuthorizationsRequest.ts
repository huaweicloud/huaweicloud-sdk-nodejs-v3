

export class GetAuthorizationsRequest {
    private 'sort_by'?: GetAuthorizationsRequestSortByEnum | string;
    public order?: GetAuthorizationsRequestOrderEnum | string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withSortBy(sortBy: GetAuthorizationsRequestSortByEnum | string): GetAuthorizationsRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: GetAuthorizationsRequestSortByEnum | string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): GetAuthorizationsRequestSortByEnum | string | undefined {
        return this['sort_by'];
    }
    public withOrder(order: GetAuthorizationsRequestOrderEnum | string): GetAuthorizationsRequest {
        this['order'] = order;
        return this;
    }
    public withLimit(limit: number): GetAuthorizationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): GetAuthorizationsRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetAuthorizationsRequestSortByEnum {
    USER_NAME = 'user_name',
    CREATE_TIME = 'create_time'
}
/**
    * @export
    * @enum {string}
    */
export enum GetAuthorizationsRequestOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
