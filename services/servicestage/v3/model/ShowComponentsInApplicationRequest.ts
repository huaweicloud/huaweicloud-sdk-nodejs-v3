

export class ShowComponentsInApplicationRequest {
    private 'application_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'order_by'?: string;
    public order?: ShowComponentsInApplicationRequestOrderEnum | string;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withApplicationId(applicationId: string): ShowComponentsInApplicationRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withLimit(limit: number): ShowComponentsInApplicationRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowComponentsInApplicationRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrderBy(orderBy: string): ShowComponentsInApplicationRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: ShowComponentsInApplicationRequestOrderEnum | string): ShowComponentsInApplicationRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowComponentsInApplicationRequestOrderEnum {
    DESC = 'desc',
    ASC = 'asc'
}
