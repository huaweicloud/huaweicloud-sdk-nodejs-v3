import { DecryptDatakeyCapsuleRequestBody } from './DecryptDatakeyCapsuleRequestBody';


export class DecryptDatakeyCapsuleRequest {
    public body?: DecryptDatakeyCapsuleRequestBody;
    public constructor() { 
    }
    public withBody(body: DecryptDatakeyCapsuleRequestBody): DecryptDatakeyCapsuleRequest {
        this['body'] = body;
        return this;
    }
}