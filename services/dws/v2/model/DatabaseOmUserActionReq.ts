

export class DatabaseOmUserActionReq {
    public operation?: string;
    public constructor(operation?: string) { 
        this['operation'] = operation;
    }
    public withOperation(operation: string): DatabaseOmUserActionReq {
        this['operation'] = operation;
        return this;
    }
}