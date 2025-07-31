import { ListTasksRequestBody } from './ListTasksRequestBody';


export class ListTasksRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public body?: ListTasksRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListTasksRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withBody(body: ListTasksRequestBody): ListTasksRequest {
        this['body'] = body;
        return this;
    }
}