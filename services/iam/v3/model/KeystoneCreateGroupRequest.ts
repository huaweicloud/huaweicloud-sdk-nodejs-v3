import { KeystoneCreateGroupRequestBody } from './KeystoneCreateGroupRequestBody';


export class KeystoneCreateGroupRequest {
    public body?: KeystoneCreateGroupRequestBody;
    public constructor() { 
    }
    public withBody(body: KeystoneCreateGroupRequestBody): KeystoneCreateGroupRequest {
        this['body'] = body;
        return this;
    }
}