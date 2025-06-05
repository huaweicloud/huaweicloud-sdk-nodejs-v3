import { CloseProtectionInfoRequestInfo } from './CloseProtectionInfoRequestInfo';


export class StopProtectionRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: CloseProtectionInfoRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): StopProtectionRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): StopProtectionRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CloseProtectionInfoRequestInfo): StopProtectionRequest {
        this['body'] = body;
        return this;
    }
}