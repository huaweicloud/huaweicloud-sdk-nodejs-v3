

export class OperationPlaybookInfo {
    public operation?: string;
    public constructor() { 
    }
    public withOperation(operation: string): OperationPlaybookInfo {
        this['operation'] = operation;
        return this;
    }
}