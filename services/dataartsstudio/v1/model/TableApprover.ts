

export class TableApprover {
    public id?: string;
    public name?: string;
    private 'permission_set_id'?: string;
    public type?: number;
    private 'workspace_id'?: string;
    private 'table_approver_type'?: string;
    public constructor() { 
    }
    public withId(id: string): TableApprover {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TableApprover {
        this['name'] = name;
        return this;
    }
    public withPermissionSetId(permissionSetId: string): TableApprover {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withType(type: number): TableApprover {
        this['type'] = type;
        return this;
    }
    public withWorkspaceId(workspaceId: string): TableApprover {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTableApproverType(tableApproverType: string): TableApprover {
        this['table_approver_type'] = tableApproverType;
        return this;
    }
    public set tableApproverType(tableApproverType: string  | undefined) {
        this['table_approver_type'] = tableApproverType;
    }
    public get tableApproverType(): string | undefined {
        return this['table_approver_type'];
    }
}