import { CreateExternalIssuesRequest } from './CreateExternalIssuesRequest';


export class CreateCocIssuesRequest {
    public body?: CreateExternalIssuesRequest;
    public constructor() { 
    }
    public withBody(body: CreateExternalIssuesRequest): CreateCocIssuesRequest {
        this['body'] = body;
        return this;
    }
}