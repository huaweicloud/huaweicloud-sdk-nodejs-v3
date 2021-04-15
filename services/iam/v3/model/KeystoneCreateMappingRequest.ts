import { KeystoneCreateMappingRequestBody } from './KeystoneCreateMappingRequestBody';


export class KeystoneCreateMappingRequest {
    public id: string;
    public body?: KeystoneCreateMappingRequestBody;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): KeystoneCreateMappingRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: KeystoneCreateMappingRequestBody): KeystoneCreateMappingRequest {
        this['body'] = body;
        return this;
    }
}