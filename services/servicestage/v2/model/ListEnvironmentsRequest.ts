

export class ListEnvironmentsRequest {
    public limit?: number;
    public offset?: number;
    private 'order_by'?: string;
    public order?: ListEnvironmentsRequestOrderEnum | string;
    public constructor() { 
    }
    public withLimit(limit: number): ListEnvironmentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListEnvironmentsRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrderBy(orderBy: string): ListEnvironmentsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: ListEnvironmentsRequestOrderEnum | string): ListEnvironmentsRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEnvironmentsRequestOrderEnum {
    DESC = 'desc',
    ASC = 'asc'
}
