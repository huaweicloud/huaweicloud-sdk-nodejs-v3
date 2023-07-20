import { KeystoneUpdateMappingRequestBody } from './KeystoneUpdateMappingRequestBody';


export class KeystoneUpdateMappingRequest {
    public id?: string;
    public body?: KeystoneUpdateMappingRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): KeystoneUpdateMappingRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: KeystoneUpdateMappingRequestBody): KeystoneUpdateMappingRequest {
        this['body'] = body;
        return this;
    }
}