import { AssociateIssuesRequestBody } from './AssociateIssuesRequestBody';


export class AssociateIssuesRequest {
    public body?: AssociateIssuesRequestBody;
    public constructor() { 
    }
    public withBody(body: AssociateIssuesRequestBody): AssociateIssuesRequest {
        this['body'] = body;
        return this;
    }
}