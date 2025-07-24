

export class ShowBranchRequest {
    private 'branch_id'?: string;
    private 'project_uuid'?: string;
    public constructor(branchId?: string) { 
        this['branch_id'] = branchId;
    }
    public withBranchId(branchId: string): ShowBranchRequest {
        this['branch_id'] = branchId;
        return this;
    }
    public set branchId(branchId: string  | undefined) {
        this['branch_id'] = branchId;
    }
    public get branchId(): string | undefined {
        return this['branch_id'];
    }
    public withProjectUuid(projectUuid: string): ShowBranchRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
}