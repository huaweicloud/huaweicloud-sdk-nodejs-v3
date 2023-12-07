import { PermissionSetMemberCreateDTO } from './PermissionSetMemberCreateDTO';


export class CreateSecurityPermissionSetMemberRequest {
    private 'permission_set_id'?: string;
    public workspace?: string;
    public body?: PermissionSetMemberCreateDTO;
    public constructor(permissionSetId?: string, workspace?: string) { 
        this['permission_set_id'] = permissionSetId;
        this['workspace'] = workspace;
    }
    public withPermissionSetId(permissionSetId: string): CreateSecurityPermissionSetMemberRequest {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withWorkspace(workspace: string): CreateSecurityPermissionSetMemberRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: PermissionSetMemberCreateDTO): CreateSecurityPermissionSetMemberRequest {
        this['body'] = body;
        return this;
    }
}