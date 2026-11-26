import { GetResourceOauth2TokenRequestBody } from './GetResourceOauth2TokenRequestBody';


export class GetResourceOauth2TokenRequest {
    public body?: GetResourceOauth2TokenRequestBody;
    public constructor() { 
    }
    public withBody(body: GetResourceOauth2TokenRequestBody): GetResourceOauth2TokenRequest {
        this['body'] = body;
        return this;
    }
}