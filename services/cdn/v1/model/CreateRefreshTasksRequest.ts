import { RefreshTaskRequest } from './RefreshTaskRequest';


export class CreateRefreshTasksRequest {
    private 'enterprise_project_id'?: string | undefined;
    public body?: RefreshTaskRequest;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateRefreshTasksRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withBody(body: RefreshTaskRequest): CreateRefreshTasksRequest {
        this['body'] = body;
        return this;
    }
}