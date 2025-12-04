import { UpdateKeypairRequestBody } from './UpdateKeypairRequestBody';


export class UpdateKeypairRequest {
    public body?: UpdateKeypairRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateKeypairRequestBody): UpdateKeypairRequest {
        this['body'] = body;
        return this;
    }
}