import { ProtectionInfoRequestInfo } from './ProtectionInfoRequestInfo';


export class StartProtectionRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: ProtectionInfoRequestInfo;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): StartProtectionRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): StartProtectionRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ProtectionInfoRequestInfo): StartProtectionRequest {
        this['body'] = body;
        return this;
    }
}