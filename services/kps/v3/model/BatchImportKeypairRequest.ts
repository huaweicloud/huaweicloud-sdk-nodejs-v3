import { CreateKeypairRequestBody } from './CreateKeypairRequestBody';


export class BatchImportKeypairRequest {
    public body?: Array<CreateKeypairRequestBody>;
    public constructor() { 
    }
    public withBody(body: Array<CreateKeypairRequestBody>): BatchImportKeypairRequest {
        this['body'] = body;
        return this;
    }
}