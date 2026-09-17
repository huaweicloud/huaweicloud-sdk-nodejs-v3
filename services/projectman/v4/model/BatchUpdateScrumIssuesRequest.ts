import { BatchUpdateRequest } from './BatchUpdateRequest';


export class BatchUpdateScrumIssuesRequest {
    public body?: BatchUpdateRequest;
    public constructor() { 
    }
    public withBody(body: BatchUpdateRequest): BatchUpdateScrumIssuesRequest {
        this['body'] = body;
        return this;
    }
}