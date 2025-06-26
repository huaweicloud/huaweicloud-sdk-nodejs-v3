

export class ListInstanceReplicationPoliciesRequest {
    private 'instance_id'?: string;
    private 'order_column'?: string;
    private 'order_type'?: string;
    public name?: string;
    private 'registry_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInstanceReplicationPoliciesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOrderColumn(orderColumn: string): ListInstanceReplicationPoliciesRequest {
        this['order_column'] = orderColumn;
        return this;
    }
    public set orderColumn(orderColumn: string  | undefined) {
        this['order_column'] = orderColumn;
    }
    public get orderColumn(): string | undefined {
        return this['order_column'];
    }
    public withOrderType(orderType: string): ListInstanceReplicationPoliciesRequest {
        this['order_type'] = orderType;
        return this;
    }
    public set orderType(orderType: string  | undefined) {
        this['order_type'] = orderType;
    }
    public get orderType(): string | undefined {
        return this['order_type'];
    }
    public withName(name: string): ListInstanceReplicationPoliciesRequest {
        this['name'] = name;
        return this;
    }
    public withRegistryId(registryId: number): ListInstanceReplicationPoliciesRequest {
        this['registry_id'] = registryId;
        return this;
    }
    public set registryId(registryId: number  | undefined) {
        this['registry_id'] = registryId;
    }
    public get registryId(): number | undefined {
        return this['registry_id'];
    }
    public withOffset(offset: number): ListInstanceReplicationPoliciesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceReplicationPoliciesRequest {
        this['limit'] = limit;
        return this;
    }
}