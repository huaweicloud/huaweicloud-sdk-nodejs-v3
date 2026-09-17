import { CancelAssociateIssueRequest } from './CancelAssociateIssueRequest';


export class CancelScrumAssociateRequest {
    public body?: CancelAssociateIssueRequest;
    public constructor() { 
    }
    public withBody(body: CancelAssociateIssueRequest): CancelScrumAssociateRequest {
        this['body'] = body;
        return this;
    }
}