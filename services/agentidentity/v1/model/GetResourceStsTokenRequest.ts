import { GetResourceStsTokenRequestBody } from './GetResourceStsTokenRequestBody';


export class GetResourceStsTokenRequest {
    public body?: GetResourceStsTokenRequestBody;
    public constructor() { 
    }
    public withBody(body: GetResourceStsTokenRequestBody): GetResourceStsTokenRequest {
        this['body'] = body;
        return this;
    }
}