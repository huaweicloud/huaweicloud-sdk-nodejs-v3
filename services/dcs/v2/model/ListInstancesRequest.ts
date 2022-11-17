

export class ListInstancesRequest {
    private 'instance_id'?: string | undefined;
    private 'include_failure'?: string | undefined;
    private 'include_delete'?: string | undefined;
    public name?: string;
    public offset?: number;
    public limit?: number;
    public status?: string;
    private 'name_equal'?: string | undefined;
    public tags?: string;
    public ip?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListInstancesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withIncludeFailure(includeFailure: string): ListInstancesRequest {
        this['include_failure'] = includeFailure;
        return this;
    }
    public set includeFailure(includeFailure: string | undefined) {
        this['include_failure'] = includeFailure;
    }
    public get includeFailure() {
        return this['include_failure'];
    }
    public withIncludeDelete(includeDelete: string): ListInstancesRequest {
        this['include_delete'] = includeDelete;
        return this;
    }
    public set includeDelete(includeDelete: string | undefined) {
        this['include_delete'] = includeDelete;
    }
    public get includeDelete() {
        return this['include_delete'];
    }
    public withName(name: string): ListInstancesRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: string): ListInstancesRequest {
        this['status'] = status;
        return this;
    }
    public withNameEqual(nameEqual: string): ListInstancesRequest {
        this['name_equal'] = nameEqual;
        return this;
    }
    public set nameEqual(nameEqual: string | undefined) {
        this['name_equal'] = nameEqual;
    }
    public get nameEqual() {
        return this['name_equal'];
    }
    public withTags(tags: string): ListInstancesRequest {
        this['tags'] = tags;
        return this;
    }
    public withIp(ip: string): ListInstancesRequest {
        this['ip'] = ip;
        return this;
    }
}