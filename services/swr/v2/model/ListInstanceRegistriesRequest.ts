

export class ListInstanceRegistriesRequest {
    private 'instance_id'?: string;
    private 'order_column'?: ListInstanceRegistriesRequestOrderColumnEnum | string;
    private 'order_type'?: ListInstanceRegistriesRequestOrderTypeEnum | string;
    public name?: string;
    public type?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInstanceRegistriesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOrderColumn(orderColumn: ListInstanceRegistriesRequestOrderColumnEnum | string): ListInstanceRegistriesRequest {
        this['order_column'] = orderColumn;
        return this;
    }
    public set orderColumn(orderColumn: ListInstanceRegistriesRequestOrderColumnEnum | string  | undefined) {
        this['order_column'] = orderColumn;
    }
    public get orderColumn(): ListInstanceRegistriesRequestOrderColumnEnum | string | undefined {
        return this['order_column'];
    }
    public withOrderType(orderType: ListInstanceRegistriesRequestOrderTypeEnum | string): ListInstanceRegistriesRequest {
        this['order_type'] = orderType;
        return this;
    }
    public set orderType(orderType: ListInstanceRegistriesRequestOrderTypeEnum | string  | undefined) {
        this['order_type'] = orderType;
    }
    public get orderType(): ListInstanceRegistriesRequestOrderTypeEnum | string | undefined {
        return this['order_type'];
    }
    public withName(name: string): ListInstanceRegistriesRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ListInstanceRegistriesRequest {
        this['type'] = type;
        return this;
    }
    public withOffset(offset: number): ListInstanceRegistriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceRegistriesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceRegistriesRequestOrderColumnEnum {
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at',
    NAME = 'name'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstanceRegistriesRequestOrderTypeEnum {
    DESC = 'desc',
    ASC = 'asc'
}
