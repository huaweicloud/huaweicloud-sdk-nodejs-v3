

export class ShowApplicationsRequest {
    public limit?: number;
    public offset?: number;
    private 'order_by'?: string;
    public order?: ShowApplicationsRequestOrderEnum | string;
    public constructor() { 
    }
    public withLimit(limit: number): ShowApplicationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowApplicationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrderBy(orderBy: string): ShowApplicationsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: ShowApplicationsRequestOrderEnum | string): ShowApplicationsRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowApplicationsRequestOrderEnum {
    DESC = 'desc',
    ASC = 'asc'
}
