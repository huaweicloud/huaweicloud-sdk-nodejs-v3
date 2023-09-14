import { BatchAssociateKeypairRequestBody } from './BatchAssociateKeypairRequestBody';


export class BatchAssociateKeypairRequest {
    public body?: BatchAssociateKeypairRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchAssociateKeypairRequestBody): BatchAssociateKeypairRequest {
        this['body'] = body;
        return this;
    }
}