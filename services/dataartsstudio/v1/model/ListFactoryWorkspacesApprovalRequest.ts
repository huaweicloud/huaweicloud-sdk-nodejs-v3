

export class ListFactoryWorkspacesApprovalRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    public status?: string;
    public type?: string;
    private 'apply_id'?: string;
    private 'approver_name'?: string;
    private 'create_user'?: string;
    private 'object_name'?: string;
    private 'object_type'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListFactoryWorkspacesApprovalRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListFactoryWorkspacesApprovalRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ListFactoryWorkspacesApprovalRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBeginTime(beginTime: number): ListFactoryWorkspacesApprovalRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): ListFactoryWorkspacesApprovalRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): ListFactoryWorkspacesApprovalRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ListFactoryWorkspacesApprovalRequest {
        this['type'] = type;
        return this;
    }
    public withApplyId(applyId: string): ListFactoryWorkspacesApprovalRequest {
        this['apply_id'] = applyId;
        return this;
    }
    public set applyId(applyId: string  | undefined) {
        this['apply_id'] = applyId;
    }
    public get applyId(): string | undefined {
        return this['apply_id'];
    }
    public withApproverName(approverName: string): ListFactoryWorkspacesApprovalRequest {
        this['approver_name'] = approverName;
        return this;
    }
    public set approverName(approverName: string  | undefined) {
        this['approver_name'] = approverName;
    }
    public get approverName(): string | undefined {
        return this['approver_name'];
    }
    public withCreateUser(createUser: string): ListFactoryWorkspacesApprovalRequest {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withObjectName(objectName: string): ListFactoryWorkspacesApprovalRequest {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withObjectType(objectType: string): ListFactoryWorkspacesApprovalRequest {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withOffset(offset: number): ListFactoryWorkspacesApprovalRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListFactoryWorkspacesApprovalRequest {
        this['limit'] = limit;
        return this;
    }
}