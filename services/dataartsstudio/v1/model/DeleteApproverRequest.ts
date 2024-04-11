

export class DeleteApproverRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'approver_ids'?: string;
    public constructor(workspace?: string, approverIds?: string) { 
        this['workspace'] = workspace;
        this['approver_ids'] = approverIds;
    }
    public withWorkspace(workspace: string): DeleteApproverRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): DeleteApproverRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): DeleteApproverRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
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