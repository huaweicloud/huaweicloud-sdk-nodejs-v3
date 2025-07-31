import { ListTaskResourcesRequestBody } from './ListTaskResourcesRequestBody';


export class ListTaskResourcesRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'task_id'?: string;
    public body?: ListTaskResourcesRequestBody;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListTaskResourcesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListTaskResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTaskResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withTaskId(taskId: string): ListTaskResourcesRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: ListTaskResourcesRequestBody): ListTaskResourcesRequest {
        this['body'] = body;
        return this;
    }
}