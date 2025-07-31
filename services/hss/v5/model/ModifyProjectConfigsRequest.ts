import { ModifyProjectConfigRequestBody } from './ModifyProjectConfigRequestBody';


export class ModifyProjectConfigsRequest {
    private 'enterprise_project_id'?: string;
    public body?: ModifyProjectConfigRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ModifyProjectConfigsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ModifyProjectConfigRequestBody): ModifyProjectConfigsRequest {
        this['body'] = body;
        return this;
    }
}