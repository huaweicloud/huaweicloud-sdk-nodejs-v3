

export class AutopilotClusterExtendParam {
    public enterpriseProjectId?: string;
    public upgradefrom?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AutopilotClusterExtendParam {
        this['enterpriseProjectId'] = enterpriseProjectId;
        return this;
    }
    public withUpgradefrom(upgradefrom: string): AutopilotClusterExtendParam {
        this['upgradefrom'] = upgradefrom;
        return this;
    }
}