import { AssociateIssueRequest } from './AssociateIssueRequest';


export class AssociateScrumIssueRequest {
    public body?: AssociateIssueRequest;
    public constructor() { 
    }
    public withBody(body: AssociateIssueRequest): AssociateScrumIssueRequest {
        this['body'] = body;
        return this;
    }
}