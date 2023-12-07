

export class ShowSecurityPermissionSetRequest {
    private 'permission_set_id'?: string;
    public workspace?: string;
    public constructor(permissionSetId?: string, workspace?: string) { 
        this['permission_set_id'] = permissionSetId;
        this['workspace'] = workspace;
    }
    public withPermissionSetId(permissionSetId: string): ShowSecurityPermissionSetRequest {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withWorkspace(workspace: string): ShowSecurityPermissionSetRequest {
        this['workspace'] = workspace;
        return this;
    }
}