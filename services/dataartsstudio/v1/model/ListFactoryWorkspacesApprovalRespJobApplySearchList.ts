

export class ListFactoryWorkspacesApprovalRespJobApplySearchList {
    private 'actual_approver'?: string;
    private 'apply_id'?: string;
    private 'approval_msg'?: string;
    private 'approval_time'?: number;
    private 'approver_name'?: string;
    private 'change_type'?: string;
    private 'create_user'?: string;
    private 'object_id'?: string;
    private 'object_name'?: string;
    private 'object_type'?: string;
    public status?: string;
    private 'submit_time'?: number;
    public constructor() { 
    }
    public withActualApprover(actualApprover: string): ListFactoryWorkspacesApprovalRespJobApplySearchList {
        this['actual_approver'] = actualApprover;
        return this;
    }
    public set actualApprover(actualApprover: string  | undefined) {
        this['actual_approver'] = actualApprover;
    }
    public get actualApprover(): string | undefined {
        return this['actual_approver'];
    }
    public withApplyId(applyId: string): ListFactoryWorkspacesApprovalRespJobApplySearchList {
        this['apply_id'] = applyId;
        return this;
    }
    public set applyId(applyId: string  | undefined) {
        this['apply_id'] = applyId;
    }
    public get applyId(): string | undefined {
        return this['apply_id'];
    }
    public withApprovalMsg(approvalMsg: string): ListFactoryWorkspacesApprovalRespJobApplySearchList {
        this['approval_msg'] = approvalMsg;
        return this;
    }
    public set approvalMsg(approvalMsg: string  | undefined) {
        this['approval_msg'] = approvalMsg;
    }
    public get approvalMsg(): string | undefined {
        return this['approval_msg'];
    }
    public withApprovalTime(approvalTime: number): ListFactoryWorkspacesApprovalRespJobApplySearchList {
        this['approval_time'] = approvalTime;
        return this;
    }
    public set approvalTime(approvalTime: number  | undefined) {
        this['approval_time'] = approvalTime;
    }
    public get approvalTime(): number | undefined {
        return this['approval_time'];
    }
    public withApproverName(approverName: string): ListFactoryWorkspacesApprovalRespJobApplySearchList {
        this['approver_name'] = approverName;
        return this;
    }
    public set approverName(approverName: string  | undefined) {
        this['approver_name'] = approverName;
    }
    public get approverName(): string | undefined {
        return this['approver_name'];
    }
    public withChangeType(changeType: string): ListFactoryWorkspacesApprovalRespJobApplySearchList {
        this['change_type'] = changeType;
        return this;
    }
    public set changeType(changeType: string  | undefined) {
        this['change_type'] = changeType;
    }
    public get changeType(): string | undefined {
        return this['change_type'];
    }
    public withCreateUser(createUser: string): ListFactoryWorkspacesApprovalRespJobApplySearchList {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withObjectId(objectId: string): ListFactoryWorkspacesApprovalRespJobApplySearchList {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withObjectName(objectName: string): ListFactoryWorkspacesApprovalRespJobApplySearchList {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withObjectType(objectType: string): ListFactoryWorkspacesApprovalRespJobApplySearchList {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withStatus(status: string): ListFactoryWorkspacesApprovalRespJobApplySearchList {
        this['status'] = status;
        return this;
    }
    public withSubmitTime(submitTime: number): ListFactoryWorkspacesApprovalRespJobApplySearchList {
        this['submit_time'] = submitTime;
        return this;
    }
    public set submitTime(submitTime: number  | undefined) {
        this['submit_time'] = submitTime;
    }
    public get submitTime(): number | undefined {
        return this['submit_time'];
    }
}