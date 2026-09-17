import { IssueFlowRequest } from './IssueFlowRequest';


export class UpdateScrumIssueWorkflowRequest {
    public body?: IssueFlowRequest;
    public constructor() { 
    }
    public withBody(body: IssueFlowRequest): UpdateScrumIssueWorkflowRequest {
        this['body'] = body;
        return this;
    }
}