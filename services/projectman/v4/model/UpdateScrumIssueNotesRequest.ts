import { AddCommentsRequest } from './AddCommentsRequest';


export class UpdateScrumIssueNotesRequest {
    public body?: AddCommentsRequest;
    public constructor() { 
    }
    public withBody(body: AddCommentsRequest): UpdateScrumIssueNotesRequest {
        this['body'] = body;
        return this;
    }
}