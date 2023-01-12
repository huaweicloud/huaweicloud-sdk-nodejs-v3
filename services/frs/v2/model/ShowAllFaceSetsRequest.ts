

export class ShowAllFaceSetsRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowAllFaceSetsRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
}