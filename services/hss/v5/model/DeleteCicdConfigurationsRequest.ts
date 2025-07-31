import { DeleteCicdConfigurationsRequestBody } from './DeleteCicdConfigurationsRequestBody';


export class DeleteCicdConfigurationsRequest {
    private 'enterprise_project_id'?: string;
    public body?: DeleteCicdConfigurationsRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteCicdConfigurationsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: DeleteCicdConfigurationsRequestBody): DeleteCicdConfigurationsRequest {
        this['body'] = body;
        return this;
    }
}