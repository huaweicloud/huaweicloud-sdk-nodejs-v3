

export class RdsDBFaultPolicyReq {
    private 'db_policy'?: string;
    public constructor(dbPolicy?: string) { 
        this['db_policy'] = dbPolicy;
    }
    public withDbPolicy(dbPolicy: string): RdsDBFaultPolicyReq {
        this['db_policy'] = dbPolicy;
        return this;
    }
    public set dbPolicy(dbPolicy: string  | undefined) {
        this['db_policy'] = dbPolicy;
    }
    public get dbPolicy(): string | undefined {
        return this['db_policy'];
    }
}