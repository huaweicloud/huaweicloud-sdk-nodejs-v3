import { KeystoneUpdateProjectRequestBody } from './KeystoneUpdateProjectRequestBody';


export class KeystoneUpdateProjectRequest {
    public body?: KeystoneUpdateProjectRequestBody;
    public constructor() { 
    }
    public withBody(body: KeystoneUpdateProjectRequestBody): KeystoneUpdateProjectRequest {
        this['body'] = body;
        return this;
    }
}