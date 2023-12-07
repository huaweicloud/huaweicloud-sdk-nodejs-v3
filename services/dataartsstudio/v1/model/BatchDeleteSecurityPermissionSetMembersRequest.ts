import { BatchDeleteBaseDTO } from './BatchDeleteBaseDTO';


export class BatchDeleteSecurityPermissionSetMembersRequest {
    private 'permission_set_id'?: string;
    public workspace?: string;
    public body?: BatchDeleteBaseDTO;
    public constructor(permissionSetId?: string, workspace?: string) { 
        this['permission_set_id'] = permissionSetId;
        this['workspace'] = workspace;
    }
    public withPermissionSetId(permissionSetId: string): BatchDeleteSecurityPermissionSetMembersRequest {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withWorkspace(workspace: string): BatchDeleteSecurityPermissionSetMembersRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: BatchDeleteBaseDTO): BatchDeleteSecurityPermissionSetMembersRequest {
        this['body'] = body;
        return this;
    }
}