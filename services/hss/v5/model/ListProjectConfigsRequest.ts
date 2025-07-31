import { ListProjectConfigsRequestBody } from './ListProjectConfigsRequestBody';


export class ListProjectConfigsRequest {
    private 'enterprise_project_id'?: string;
    public body?: ListProjectConfigsRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListProjectConfigsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ListProjectConfigsRequestBody): ListProjectConfigsRequest {
        this['body'] = body;
        return this;
    }
}