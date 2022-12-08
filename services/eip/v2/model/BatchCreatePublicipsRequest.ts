import { BatchCreatePublicipsV2RequestBody } from './BatchCreatePublicipsV2RequestBody';


export class BatchCreatePublicipsRequest {
    public body?: BatchCreatePublicipsV2RequestBody;
    public constructor() { 
    }
    public withBody(body: BatchCreatePublicipsV2RequestBody): BatchCreatePublicipsRequest {
        this['body'] = body;
        return this;
    }
}