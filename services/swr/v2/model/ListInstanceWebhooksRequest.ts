

export class ListInstanceWebhooksRequest {
    private 'instance_id'?: string;
    private 'order_column'?: string;
    private 'order_type'?: ListInstanceWebhooksRequestOrderTypeEnum | string;
    public name?: string;
    private 'namespace_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInstanceWebhooksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOrderColumn(orderColumn: string): ListInstanceWebhooksRequest {
        this['order_column'] = orderColumn;
        return this;
    }
    public set orderColumn(orderColumn: string  | undefined) {
        this['order_column'] = orderColumn;
    }
    public get orderColumn(): string | undefined {
        return this['order_column'];
    }
    public withOrderType(orderType: ListInstanceWebhooksRequestOrderTypeEnum | string): ListInstanceWebhooksRequest {
        this['order_type'] = orderType;
        return this;
    }
    public set orderType(orderType: ListInstanceWebhooksRequestOrderTypeEnum | string  | undefined) {
        this['order_type'] = orderType;
    }
    public get orderType(): ListInstanceWebhooksRequestOrderTypeEnum | string | undefined {
        return this['order_type'];
    }
    public withName(name: string): ListInstanceWebhooksRequest {
        this['name'] = name;
        return this;
    }
    public withNamespaceId(namespaceId: number): ListInstanceWebhooksRequest {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withOffset(offset: number): ListInstanceWebhooksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceWebhooksRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceWebhooksRequestOrderTypeEnum {
    DESC = 'desc',
    ASC = 'asc'
}
