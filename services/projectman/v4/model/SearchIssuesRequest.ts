import { ListWorkTableIssueRequestV4RequestBody } from './ListWorkTableIssueRequestV4RequestBody';


export class SearchIssuesRequest {
    public body?: ListWorkTableIssueRequestV4RequestBody;
    public constructor() { 
    }
    public withBody(body: ListWorkTableIssueRequestV4RequestBody): SearchIssuesRequest {
        this['body'] = body;
        return this;
    }
}