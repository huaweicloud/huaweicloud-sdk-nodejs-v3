

export class DeletePromInstanceRequest {
    private 'prom_id'?: string;
    private 'Enterprise-Project-Id'?: string;
    public constructor(promId?: string) { 
        this['prom_id'] = promId;
    }
    public withPromId(promId: string): DeletePromInstanceRequest {
        this['prom_id'] = promId;
        return this;
    }
    public set promId(promId: string  | undefined) {
        this['prom_id'] = promId;
    }
    public get promId(): string | undefined {
        return this['prom_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeletePromInstanceRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
}