import { DecryptDatakeyRequestBody } from './DecryptDatakeyRequestBody';


export class DecryptDatakeyRequest {
    public body?: DecryptDatakeyRequestBody;
    public constructor() { 
    }
    public withBody(body: DecryptDatakeyRequestBody): DecryptDatakeyRequest {
        this['body'] = body;
        return this;
    }
}