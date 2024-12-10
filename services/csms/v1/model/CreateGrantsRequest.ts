import { GrantSecretReqBody } from './GrantSecretReqBody';


export class CreateGrantsRequest {
    public body?: GrantSecretReqBody;
    public constructor() { 
    }
    public withBody(body: GrantSecretReqBody): CreateGrantsRequest {
        this['body'] = body;
        return this;
    }
}