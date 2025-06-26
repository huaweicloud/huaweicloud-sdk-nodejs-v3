

export class ListNamespaceRepositoriesRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'order_column'?: ListNamespaceRepositoriesRequestOrderColumnEnum | string;
    private 'order_type'?: ListNamespaceRepositoriesRequestOrderTypeEnum | string;
    private 'namespace_name'?: string;
    public constructor(instanceId?: string, namespaceName?: string) { 
        this['instance_id'] = instanceId;
        this['namespace_name'] = namespaceName;
    }
    public withInstanceId(instanceId: string): ListNamespaceRepositoriesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListNamespaceRepositoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListNamespaceRepositoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderColumn(orderColumn: ListNamespaceRepositoriesRequestOrderColumnEnum | string): ListNamespaceRepositoriesRequest {
        this['order_column'] = orderColumn;
        return this;
    }
    public set orderColumn(orderColumn: ListNamespaceRepositoriesRequestOrderColumnEnum | string  | undefined) {
        this['order_column'] = orderColumn;
    }
    public get orderColumn(): ListNamespaceRepositoriesRequestOrderColumnEnum | string | undefined {
        return this['order_column'];
    }
    public withOrderType(orderType: ListNamespaceRepositoriesRequestOrderTypeEnum | string): ListNamespaceRepositoriesRequest {
        this['order_type'] = orderType;
        return this;
    }
    public set orderType(orderType: ListNamespaceRepositoriesRequestOrderTypeEnum | string  | undefined) {
        this['order_type'] = orderType;
    }
    public get orderType(): ListNamespaceRepositoriesRequestOrderTypeEnum | string | undefined {
        return this['order_type'];
    }
    public withNamespaceName(namespaceName: string): ListNamespaceRepositoriesRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListNamespaceRepositoriesRequestOrderColumnEnum {
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListNamespaceRepositoriesRequestOrderTypeEnum {
    DESC = 'desc',
    ASC = 'asc'
}
