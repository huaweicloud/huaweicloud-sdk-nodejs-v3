import { DecryptDataRequestBody } from './DecryptDataRequestBody';


export class DecryptDataRequest {
    public body?: DecryptDataRequestBody;
    public constructor() { 
    }
    public withBody(body: DecryptDataRequestBody): DecryptDataRequest {
        this['body'] = body;
        return this;
    }
}