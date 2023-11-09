

export class ListInstancesRequest {
    private 'application_id'?: string;
    private 'component_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'order_by'?: string;
    public order?: ListInstancesRequestOrderEnum | string;
    public constructor(applicationId?: string, componentId?: string) { 
        this['application_id'] = applicationId;
        this['component_id'] = componentId;
    }
    public withApplicationId(applicationId: string): ListInstancesRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withComponentId(componentId: string): ListInstancesRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withLimit(limit: number): ListInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrderBy(orderBy: string): ListInstancesRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: ListInstancesRequestOrderEnum | string): ListInstancesRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRequestOrderEnum {
    DESC = 'desc',
    ASC = 'asc'
}
