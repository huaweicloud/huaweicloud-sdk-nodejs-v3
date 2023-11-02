

export class ListApproversRequest {
    public workspace?: string;
    private 'approver_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListApproversRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withApproverName(approverName: string): ListApproversRequest {
        this['approver_name'] = approverName;
        return this;
    }
    public set approverName(approverName: string  | undefined) {
        this['approver_name'] = approverName;
    }
    public get approverName(): string | undefined {
        return this['approver_name'];
    }
    public withLimit(limit: number): ListApproversRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListApproversRequest {
        this['offset'] = offset;
        return this;
    }
}