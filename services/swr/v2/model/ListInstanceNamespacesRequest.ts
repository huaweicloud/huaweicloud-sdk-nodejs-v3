

export class ListInstanceNamespacesRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'order_column'?: ListInstanceNamespacesRequestOrderColumnEnum | string;
    private 'order_type'?: ListInstanceNamespacesRequestOrderTypeEnum | string;
    public name?: string;
    private 'public'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInstanceNamespacesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListInstanceNamespacesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceNamespacesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderColumn(orderColumn: ListInstanceNamespacesRequestOrderColumnEnum | string): ListInstanceNamespacesRequest {
        this['order_column'] = orderColumn;
        return this;
    }
    public set orderColumn(orderColumn: ListInstanceNamespacesRequestOrderColumnEnum | string  | undefined) {
        this['order_column'] = orderColumn;
    }
    public get orderColumn(): ListInstanceNamespacesRequestOrderColumnEnum | string | undefined {
        return this['order_column'];
    }
    public withOrderType(orderType: ListInstanceNamespacesRequestOrderTypeEnum | string): ListInstanceNamespacesRequest {
        this['order_type'] = orderType;
        return this;
    }
    public set orderType(orderType: ListInstanceNamespacesRequestOrderTypeEnum | string  | undefined) {
        this['order_type'] = orderType;
    }
    public get orderType(): ListInstanceNamespacesRequestOrderTypeEnum | string | undefined {
        return this['order_type'];
    }
    public withName(name: string): ListInstanceNamespacesRequest {
        this['name'] = name;
        return this;
    }
    public withPublic(_public: string): ListInstanceNamespacesRequest {
        this['public'] = _public;
        return this;
    }
    public set _public(_public: string  | undefined) {
        this['public'] = _public;
    }
    public get _public(): string | undefined {
        return this['public'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceNamespacesRequestOrderColumnEnum {
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstanceNamespacesRequestOrderTypeEnum {
    DESC = 'desc',
    ASC = 'asc'
}
