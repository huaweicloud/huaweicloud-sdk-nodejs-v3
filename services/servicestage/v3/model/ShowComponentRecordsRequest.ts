

export class ShowComponentRecordsRequest {
    private 'component_id'?: string;
    private 'application_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'order_by'?: string;
    public order?: ShowComponentRecordsRequestOrderEnum | string;
    public constructor(componentId?: string, applicationId?: string) { 
        this['component_id'] = componentId;
        this['application_id'] = applicationId;
    }
    public withComponentId(componentId: string): ShowComponentRecordsRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withApplicationId(applicationId: string): ShowComponentRecordsRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withLimit(limit: number): ShowComponentRecordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowComponentRecordsRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrderBy(orderBy: string): ShowComponentRecordsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: ShowComponentRecordsRequestOrderEnum | string): ShowComponentRecordsRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowComponentRecordsRequestOrderEnum {
    DESC = 'desc',
    ASC = 'asc'
}
