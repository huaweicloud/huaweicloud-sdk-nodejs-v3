import { KeystoneCreateProjectRequestBody } from './KeystoneCreateProjectRequestBody';


export class KeystoneCreateProjectRequest {
    public body?: KeystoneCreateProjectRequestBody;
    public constructor() { 
    }
    public withBody(body: KeystoneCreateProjectRequestBody): KeystoneCreateProjectRequest {
        this['body'] = body;
        return this;
    }
}