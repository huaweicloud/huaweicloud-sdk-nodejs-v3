import { CreateTaskRequestBody } from './CreateTaskRequestBody';


export class CreateTaskRequest {
    private 'enterprise_project_id'?: string;
    public body?: CreateTaskRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CreateTaskRequestBody): CreateTaskRequest {
        this['body'] = body;
        return this;
    }
}