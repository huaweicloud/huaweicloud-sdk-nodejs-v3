import { UpdateCommentsRequest } from './UpdateCommentsRequest';


export class UpdateScrumMyIssueNotesRequest {
    public body?: UpdateCommentsRequest;
    public constructor() { 
    }
    public withBody(body: UpdateCommentsRequest): UpdateScrumMyIssueNotesRequest {
        this['body'] = body;
        return this;
    }
}