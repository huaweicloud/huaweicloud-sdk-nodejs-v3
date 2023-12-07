import { PermissionSetPermissionUpdateDTO } from './PermissionSetPermissionUpdateDTO';


export class UpdateSecurityPermissionSetPermissionRequest {
    private 'permission_set_id'?: string;
    private 'permission_id'?: string;
    public workspace?: string;
    public body?: PermissionSetPermissionUpdateDTO;
    public constructor(permissionSetId?: string, permissionId?: string, workspace?: string) { 
        this['permission_set_id'] = permissionSetId;
        this['permission_id'] = permissionId;
        this['workspace'] = workspace;
    }
    public withPermissionSetId(permissionSetId: string): UpdateSecurityPermissionSetPermissionRequest {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withPermissionId(permissionId: string): UpdateSecurityPermissionSetPermissionRequest {
        this['permission_id'] = permissionId;
        return this;
    }
    public set permissionId(permissionId: string  | undefined) {
        this['permission_id'] = permissionId;
    }
    public get permissionId(): string | undefined {
        return this['permission_id'];
    }
    public withWorkspace(workspace: string): UpdateSecurityPermissionSetPermissionRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: PermissionSetPermissionUpdateDTO): UpdateSecurityPermissionSetPermissionRequest {
        this['body'] = body;
        return this;
    }
}