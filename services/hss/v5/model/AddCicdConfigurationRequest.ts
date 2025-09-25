import { AddCicdConfigurationRequestBody } from './AddCicdConfigurationRequestBody';


export class AddCicdConfigurationRequest {
    private 'enterprise_project_id'?: string;
    public body?: AddCicdConfigurationRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddCicdConfigurationRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: AddCicdConfigurationRequestBody): AddCicdConfigurationRequest {
        this['body'] = body;
        return this;
    }
}