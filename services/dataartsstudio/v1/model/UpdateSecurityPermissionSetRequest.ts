import { PermissionSetCreateDTO } from './PermissionSetCreateDTO';


export class UpdateSecurityPermissionSetRequest {
    private 'permission_set_id'?: string;
    public workspace?: string;
    public body?: PermissionSetCreateDTO;
    public constructor(permissionSetId?: string, workspace?: string) { 
        this['permission_set_id'] = permissionSetId;
        this['workspace'] = workspace;
    }
    public withPermissionSetId(permissionSetId: string): UpdateSecurityPermissionSetRequest {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withWorkspace(workspace: string): UpdateSecurityPermissionSetRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: PermissionSetCreateDTO): UpdateSecurityPermissionSetRequest {
        this['body'] = body;
        return this;
    }
}