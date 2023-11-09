

export class ShowComponentsRequest {
    public limit?: number;
    public offset?: number;
    private 'order_by'?: string;
    public order?: ShowComponentsRequestOrderEnum | string;
    private 'application_name'?: string;
    private 'component_name'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ShowComponentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowComponentsRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrderBy(orderBy: string): ShowComponentsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: ShowComponentsRequestOrderEnum | string): ShowComponentsRequest {
        this['order'] = order;
        return this;
    }
    public withApplicationName(applicationName: string): ShowComponentsRequest {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string  | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName(): string | undefined {
        return this['application_name'];
    }
    public withComponentName(componentName: string): ShowComponentsRequest {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowComponentsRequestOrderEnum {
    DESC = 'desc',
    ASC = 'asc'
}
