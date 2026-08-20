

export class IssueBaselineResult {
    public id?: string;
    private 'modified_by'?: string;
    public baseline?: string;
    private 'operation_id'?: string;
    private 'modified_date'?: string;
    private 'number'?: string;
    public title?: string;
    private 'fail_message'?: string;
    public constructor() { 
    }
    public withId(id: string): IssueBaselineResult {
        this['id'] = id;
        return this;
    }
    public withModifiedBy(modifiedBy: string): IssueBaselineResult {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
    public withBaseline(baseline: string): IssueBaselineResult {
        this['baseline'] = baseline;
        return this;
    }
    public withOperationId(operationId: string): IssueBaselineResult {
        this['operation_id'] = operationId;
        return this;
    }
    public set operationId(operationId: string  | undefined) {
        this['operation_id'] = operationId;
    }
    public get operationId(): string | undefined {
        return this['operation_id'];
    }
    public withModifiedDate(modifiedDate: string): IssueBaselineResult {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: string  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): string | undefined {
        return this['modified_date'];
    }
    public withModelNumber(modelNumber: string): IssueBaselineResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withTitle(title: string): IssueBaselineResult {
        this['title'] = title;
        return this;
    }
    public withFailMessage(failMessage: string): IssueBaselineResult {
        this['fail_message'] = failMessage;
        return this;
    }
    public set failMessage(failMessage: string  | undefined) {
        this['fail_message'] = failMessage;
    }
    public get failMessage(): string | undefined {
        return this['fail_message'];
    }
}