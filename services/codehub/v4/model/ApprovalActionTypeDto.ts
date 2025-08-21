

export class ApprovalActionTypeDto {
    private 'action_type'?: string;
    private 'approver_comment'?: string;
    public constructor() { 
    }
    public withActionType(actionType: string): ApprovalActionTypeDto {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: string  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): string | undefined {
        return this['action_type'];
    }
    public withApproverComment(approverComment: string): ApprovalActionTypeDto {
        this['approver_comment'] = approverComment;
        return this;
    }
    public set approverComment(approverComment: string  | undefined) {
        this['approver_comment'] = approverComment;
    }
    public get approverComment(): string | undefined {
        return this['approver_comment'];
    }
}