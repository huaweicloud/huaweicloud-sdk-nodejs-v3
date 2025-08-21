

export class ApprovalApproverInfoDto {
    private 'approver_ids'?: string;
    public constructor() { 
    }
    public withApproverIds(approverIds: string): ApprovalApproverInfoDto {
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