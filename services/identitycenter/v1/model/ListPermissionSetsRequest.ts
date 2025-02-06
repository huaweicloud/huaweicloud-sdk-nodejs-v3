

export class ListPermissionSetsRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    public limit?: number;
    public marker?: string;
    private 'permission_set_id'?: string;
    private 'permission_urn'?: string;
    public name?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXSecurityToken(xSecurityToken: string): ListPermissionSetsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): ListPermissionSetsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListPermissionSetsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPermissionSetsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPermissionSetId(permissionSetId: string): ListPermissionSetsRequest {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withPermissionUrn(permissionUrn: string): ListPermissionSetsRequest {
        this['permission_urn'] = permissionUrn;
        return this;
    }
    public set permissionUrn(permissionUrn: string  | undefined) {
        this['permission_urn'] = permissionUrn;
    }
    public get permissionUrn(): string | undefined {
        return this['permission_urn'];
    }
    public withName(name: string): ListPermissionSetsRequest {
        this['name'] = name;
        return this;
    }
}