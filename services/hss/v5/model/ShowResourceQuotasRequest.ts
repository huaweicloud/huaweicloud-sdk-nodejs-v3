

export class ShowResourceQuotasRequest {
    private 'enterprise_project_id'?: string;
    public version?: string;
    private 'charging_mode'?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowResourceQuotasRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withVersion(version: string): ShowResourceQuotasRequest {
        this['version'] = version;
        return this;
    }
    public withChargingMode(chargingMode: string): ShowResourceQuotasRequest {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
}