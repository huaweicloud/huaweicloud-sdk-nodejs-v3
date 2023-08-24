

export class ListEndpointPermissionsRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public permission?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListEndpointPermissionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListEndpointPermissionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEndpointPermissionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withPermission(permission: string): ListEndpointPermissionsRequest {
        this['permission'] = permission;
        return this;
    }
}