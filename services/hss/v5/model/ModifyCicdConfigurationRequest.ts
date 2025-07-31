import { ModifyCicdConfigurationRequestBody } from './ModifyCicdConfigurationRequestBody';


export class ModifyCicdConfigurationRequest {
    private 'enterprise_project_id'?: string;
    private 'cicd_id'?: string;
    public body?: ModifyCicdConfigurationRequestBody;
    public constructor(cicdId?: string) { 
        this['cicd_id'] = cicdId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ModifyCicdConfigurationRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCicdId(cicdId: string): ModifyCicdConfigurationRequest {
        this['cicd_id'] = cicdId;
        return this;
    }
    public set cicdId(cicdId: string  | undefined) {
        this['cicd_id'] = cicdId;
    }
    public get cicdId(): string | undefined {
        return this['cicd_id'];
    }
    public withBody(body: ModifyCicdConfigurationRequestBody): ModifyCicdConfigurationRequest {
        this['body'] = body;
        return this;
    }
}