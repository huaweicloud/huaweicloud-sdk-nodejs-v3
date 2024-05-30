

export class RollbackApprovalResultData {
    public value?: string;
    public constructor() { 
    }
    public withValue(value: string): RollbackApprovalResultData {
        this['value'] = value;
        return this;
    }
}