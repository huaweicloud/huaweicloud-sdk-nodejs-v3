import { BatchAddMembersRequestBody } from './BatchAddMembersRequestBody';


export class BatchDeleteMembersRequest {
    public body?: BatchAddMembersRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchAddMembersRequestBody): BatchDeleteMembersRequest {
        this['body'] = body;
        return this;
    }
}