

export class DeleteApproverRequest {
    public workspace?: string;
    private 'approver_ids'?: string;
    public constructor(workspace?: string, approverIds?: string) { 
        this['workspace'] = workspace;
        this['approver_ids'] = approverIds;
    }
    public withWorkspace(workspace: string): DeleteApproverRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withApproverIds(approverIds: string): DeleteApproverRequest {
        this['approver_ids'] = approverIds;
        return this;
    }
    public set approverIds(approverIds: string  | undefined) {
        this['approver_ids'] = approverIds;
    }
    public get approverIds(): string | undefined {
        return this['approver_ids'];
    }
}