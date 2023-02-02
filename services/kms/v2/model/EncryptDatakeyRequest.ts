import { EncryptDatakeyRequestBody } from './EncryptDatakeyRequestBody';


export class EncryptDatakeyRequest {
    public body?: EncryptDatakeyRequestBody;
    public constructor() { 
    }
    public withBody(body: EncryptDatakeyRequestBody): EncryptDatakeyRequest {
        this['body'] = body;
        return this;
    }
}