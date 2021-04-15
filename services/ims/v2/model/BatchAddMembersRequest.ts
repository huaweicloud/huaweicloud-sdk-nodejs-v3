import { BatchAddMembersRequestBody } from './BatchAddMembersRequestBody';


export class BatchAddMembersRequest {
    public body?: BatchAddMembersRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchAddMembersRequestBody): BatchAddMembersRequest {
        this['body'] = body;
        return this;
    }
}