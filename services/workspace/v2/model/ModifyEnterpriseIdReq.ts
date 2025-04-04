

export class ModifyEnterpriseIdReq {
    private 'enterprise_id'?: string;
    public constructor(enterpriseId?: string) { 
        this['enterprise_id'] = enterpriseId;
    }
    public withEnterpriseId(enterpriseId: string): ModifyEnterpriseIdReq {
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