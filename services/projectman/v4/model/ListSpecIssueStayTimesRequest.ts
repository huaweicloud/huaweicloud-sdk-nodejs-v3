import { ListSpecIssueStayTimesRequestBody } from './ListSpecIssueStayTimesRequestBody';


export class ListSpecIssueStayTimesRequest {
    public body?: ListSpecIssueStayTimesRequestBody;
    public constructor() { 
    }
    public withBody(body: ListSpecIssueStayTimesRequestBody): ListSpecIssueStayTimesRequest {
        this['body'] = body;
        return this;
    }
}