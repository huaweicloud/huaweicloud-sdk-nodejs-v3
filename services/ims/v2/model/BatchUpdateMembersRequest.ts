import { BatchUpdateMembersRequestBody } from './BatchUpdateMembersRequestBody';


export class BatchUpdateMembersRequest {
    public body?: BatchUpdateMembersRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchUpdateMembersRequestBody): BatchUpdateMembersRequest {
        this['body'] = body;
        return this;
    }
}