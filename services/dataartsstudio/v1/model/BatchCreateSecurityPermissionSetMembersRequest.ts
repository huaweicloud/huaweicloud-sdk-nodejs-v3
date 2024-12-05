import { PermissionSetMemberBatchCreateDTO } from './PermissionSetMemberBatchCreateDTO';


export class BatchCreateSecurityPermissionSetMembersRequest {
    private 'permission_set_id'?: string;
    public workspace?: string;
    public body?: PermissionSetMemberBatchCreateDTO;
    public constructor(permissionSetId?: string, workspace?: string) { 
        this['permission_set_id'] = permissionSetId;
        this['workspace'] = workspace;
    }
    public withPermissionSetId(permissionSetId: string): BatchCreateSecurityPermissionSetMembersRequest {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withWorkspace(workspace: string): BatchCreateSecurityPermissionSetMembersRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: PermissionSetMemberBatchCreateDTO): BatchCreateSecurityPermissionSetMembersRequest {
        this['body'] = body;
        return this;
    }
}