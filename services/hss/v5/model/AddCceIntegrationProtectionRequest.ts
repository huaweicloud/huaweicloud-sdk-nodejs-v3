import { CceIntegrationProtectionRequestBody } from './CceIntegrationProtectionRequestBody';


export class AddCceIntegrationProtectionRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: CceIntegrationProtectionRequestBody;
    public constructor() { 
    }
    public withRegion(region: string): AddCceIntegrationProtectionRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddCceIntegrationProtectionRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CceIntegrationProtectionRequestBody): AddCceIntegrationProtectionRequest {
        this['body'] = body;
        return this;
    }
}