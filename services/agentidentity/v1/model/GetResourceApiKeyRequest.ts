import { GetResourceApiKeyRequestBody } from './GetResourceApiKeyRequestBody';


export class GetResourceApiKeyRequest {
    public body?: GetResourceApiKeyRequestBody;
    public constructor() { 
    }
    public withBody(body: GetResourceApiKeyRequestBody): GetResourceApiKeyRequest {
        this['body'] = body;
        return this;
    }
}