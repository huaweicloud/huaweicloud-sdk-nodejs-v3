

export class ListInstanceRepositoriesRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'order_column'?: ListInstanceRepositoriesRequestOrderColumnEnum | string;
    private 'order_type'?: ListInstanceRepositoriesRequestOrderTypeEnum | string;
    private 'namespace_id'?: number;
    public name?: string;
    private 'with_tag'?: boolean;
    public tags?: string;
    private 'namespace_ids'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInstanceRepositoriesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListInstanceRepositoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceRepositoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderColumn(orderColumn: ListInstanceRepositoriesRequestOrderColumnEnum | string): ListInstanceRepositoriesRequest {
        this['order_column'] = orderColumn;
        return this;
    }
    public set orderColumn(orderColumn: ListInstanceRepositoriesRequestOrderColumnEnum | string  | undefined) {
        this['order_column'] = orderColumn;
    }
    public get orderColumn(): ListInstanceRepositoriesRequestOrderColumnEnum | string | undefined {
        return this['order_column'];
    }
    public withOrderType(orderType: ListInstanceRepositoriesRequestOrderTypeEnum | string): ListInstanceRepositoriesRequest {
        this['order_type'] = orderType;
        return this;
    }
    public set orderType(orderType: ListInstanceRepositoriesRequestOrderTypeEnum | string  | undefined) {
        this['order_type'] = orderType;
    }
    public get orderType(): ListInstanceRepositoriesRequestOrderTypeEnum | string | undefined {
        return this['order_type'];
    }
    public withNamespaceId(namespaceId: number): ListInstanceRepositoriesRequest {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withName(name: string): ListInstanceRepositoriesRequest {
        this['name'] = name;
        return this;
    }
    public withWithTag(withTag: boolean): ListInstanceRepositoriesRequest {
        this['with_tag'] = withTag;
        return this;
    }
    public set withTag(withTag: boolean  | undefined) {
        this['with_tag'] = withTag;
    }
    public get withTag(): boolean | undefined {
        return this['with_tag'];
    }
    public withTags(tags: string): ListInstanceRepositoriesRequest {
        this['tags'] = tags;
        return this;
    }
    public withNamespaceIds(namespaceIds: string): ListInstanceRepositoriesRequest {
        this['namespace_ids'] = namespaceIds;
        return this;
    }
    public set namespaceIds(namespaceIds: string  | undefined) {
        this['namespace_ids'] = namespaceIds;
    }
    public get namespaceIds(): string | undefined {
        return this['namespace_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceRepositoriesRequestOrderColumnEnum {
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstanceRepositoriesRequestOrderTypeEnum {
    DESC = 'desc',
    ASC = 'asc'
}
