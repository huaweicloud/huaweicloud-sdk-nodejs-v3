

export class ListApproversRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
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
    public withXProjectId(xProjectId: string): ListApproversRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ListApproversRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
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