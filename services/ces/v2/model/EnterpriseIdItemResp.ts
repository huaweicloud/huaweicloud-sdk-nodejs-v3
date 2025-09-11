

export class EnterpriseIdItemResp {
    private 'enterprise_id'?: string;
    public constructor() { 
    }
    public withEnterpriseId(enterpriseId: string): EnterpriseIdItemResp {
        this['enterprise_id'] = enterpriseId;
        return this;
    }
    public set enterpriseId(enterpriseId: string  | undefined) {
        this['enterprise_id'] = enterpriseId;
    }
    public get enterpriseId(): string | undefined {
        return this['enterprise_id'];
    }
}