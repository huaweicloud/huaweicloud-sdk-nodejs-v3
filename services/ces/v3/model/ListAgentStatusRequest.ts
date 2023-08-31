import { ListAgentStatusRequestBody } from './ListAgentStatusRequestBody';


export class ListAgentStatusRequest {
    public body?: ListAgentStatusRequestBody;
    public constructor() { 
    }
    public withBody(body: ListAgentStatusRequestBody): ListAgentStatusRequest {
        this['body'] = body;
        return this;
    }
}