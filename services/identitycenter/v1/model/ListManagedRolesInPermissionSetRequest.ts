

export class ListManagedRolesInPermissionSetRequest {
    private 'instance_id'?: string;
    private 'permission_set_id'?: string;
    private 'X-Security-Token'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(instanceId?: string, permissionSetId?: string) { 
        this['instance_id'] = instanceId;
        this['permission_set_id'] = permissionSetId;
    }
    public withInstanceId(instanceId: string): ListManagedRolesInPermissionSetRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPermissionSetId(permissionSetId: string): ListManagedRolesInPermissionSetRequest {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withXSecurityToken(xSecurityToken: string): ListManagedRolesInPermissionSetRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withLimit(limit: number): ListManagedRolesInPermissionSetRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListManagedRolesInPermissionSetRequest {
        this['marker'] = marker;
        return this;
    }
}