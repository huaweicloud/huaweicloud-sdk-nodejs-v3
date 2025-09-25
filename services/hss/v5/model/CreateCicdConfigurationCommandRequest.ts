import { CreateCicdConfigurationCommandRequestBody } from './CreateCicdConfigurationCommandRequestBody';


export class CreateCicdConfigurationCommandRequest {
    private 'enterprise_project_id'?: string;
    public body?: CreateCicdConfigurationCommandRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateCicdConfigurationCommandRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CreateCicdConfigurationCommandRequestBody): CreateCicdConfigurationCommandRequest {
        this['body'] = body;
        return this;
    }
}