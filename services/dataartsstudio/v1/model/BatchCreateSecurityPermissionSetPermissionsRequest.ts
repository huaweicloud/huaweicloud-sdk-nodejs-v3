import { PermissionSetPermissionCreateDTO } from './PermissionSetPermissionCreateDTO';


export class BatchCreateSecurityPermissionSetPermissionsRequest {
    private 'permission_set_id'?: string;
    public workspace?: string;
    public body?: PermissionSetPermissionCreateDTO;
    public constructor(permissionSetId?: string, workspace?: string) { 
        this['permission_set_id'] = permissionSetId;
        this['workspace'] = workspace;
    }
    public withPermissionSetId(permissionSetId: string): BatchCreateSecurityPermissionSetPermissionsRequest {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withWorkspace(workspace: string): BatchCreateSecurityPermissionSetPermissionsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: PermissionSetPermissionCreateDTO): BatchCreateSecurityPermissionSetPermissionsRequest {
        this['body'] = body;
        return this;
    }
}