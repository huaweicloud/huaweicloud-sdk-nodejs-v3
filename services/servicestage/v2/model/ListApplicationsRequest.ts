

export class ListApplicationsRequest {
    public limit?: number;
    public offset?: number;
    private 'order_by'?: string;
    public order?: ListApplicationsRequestOrderEnum | string;
    public constructor() { 
    }
    public withLimit(limit: number): ListApplicationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListApplicationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrderBy(orderBy: string): ListApplicationsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: ListApplicationsRequestOrderEnum | string): ListApplicationsRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListApplicationsRequestOrderEnum {
    DESC = 'desc',
    ASC = 'asc'
}
