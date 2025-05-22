import { ListIssueCustomFieldsRequestBody } from './ListIssueCustomFieldsRequestBody';


export class ListIssueCustomFieldsRequest {
    private 'project_id'?: string;
    public body?: ListIssueCustomFieldsRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListIssueCustomFieldsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: ListIssueCustomFieldsRequestBody): ListIssueCustomFieldsRequest {
        this['body'] = body;
        return this;
    }
}