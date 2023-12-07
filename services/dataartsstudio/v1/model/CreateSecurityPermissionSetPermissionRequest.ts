import { PermissionSetPermissionCreateDTO } from './PermissionSetPermissionCreateDTO';


export class CreateSecurityPermissionSetPermissionRequest {
    private 'permission_set_id'?: string;
    public workspace?: string;
    public body?: PermissionSetPermissionCreateDTO;
    public constructor(permissionSetId?: string, workspace?: string) { 
        this['permission_set_id'] = permissionSetId;
        this['workspace'] = workspace;
    }
    public withPermissionSetId(permissionSetId: string): CreateSecurityPermissionSetPermissionRequest {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withWorkspace(workspace: string): CreateSecurityPermissionSetPermissionRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: PermissionSetPermissionCreateDTO): CreateSecurityPermissionSetPermissionRequest {
        this['body'] = body;
        return this;
    }
}