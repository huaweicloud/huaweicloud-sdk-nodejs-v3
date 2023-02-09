import { PreheatingTaskRequest } from './PreheatingTaskRequest';


export class CreatePreheatingTasksRequest {
    private 'enterprise_project_id'?: string | undefined;
    public body?: PreheatingTaskRequest;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreatePreheatingTasksRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withBody(body: PreheatingTaskRequest): CreatePreheatingTasksRequest {
        this['body'] = body;
        return this;
    }
}