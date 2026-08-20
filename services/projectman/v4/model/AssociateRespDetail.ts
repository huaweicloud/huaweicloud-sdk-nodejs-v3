

export class AssociateRespDetail {
    private 'issue_id'?: string;
    private 'fail_msg'?: string;
    private 'operation_flag'?: number;
    private 'modified_date'?: number;
    private 'modified_by'?: string;
    public constructor() { 
    }
    public withIssueId(issueId: string): AssociateRespDetail {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withFailMsg(failMsg: string): AssociateRespDetail {
        this['fail_msg'] = failMsg;
        return this;
    }
    public set failMsg(failMsg: string  | undefined) {
        this['fail_msg'] = failMsg;
    }
    public get failMsg(): string | undefined {
        return this['fail_msg'];
    }
    public withOperationFlag(operationFlag: number): AssociateRespDetail {
        this['operation_flag'] = operationFlag;
        return this;
    }
    public set operationFlag(operationFlag: number  | undefined) {
        this['operation_flag'] = operationFlag;
    }
    public get operationFlag(): number | undefined {
        return this['operation_flag'];
    }
    public withModifiedDate(modifiedDate: number): AssociateRespDetail {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: number  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): number | undefined {
        return this['modified_date'];
    }
    public withModifiedBy(modifiedBy: string): AssociateRespDetail {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
}