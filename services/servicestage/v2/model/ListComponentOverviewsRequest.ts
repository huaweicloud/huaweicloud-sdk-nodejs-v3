

export class ListComponentOverviewsRequest {
    private 'application_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'order_by'?: string;
    public order?: ListComponentOverviewsRequestOrderEnum | string;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withApplicationId(applicationId: string): ListComponentOverviewsRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withLimit(limit: number): ListComponentOverviewsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListComponentOverviewsRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrderBy(orderBy: string): ListComponentOverviewsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: ListComponentOverviewsRequestOrderEnum | string): ListComponentOverviewsRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListComponentOverviewsRequestOrderEnum {
    DESC = 'desc',
    ASC = 'asc'
}
