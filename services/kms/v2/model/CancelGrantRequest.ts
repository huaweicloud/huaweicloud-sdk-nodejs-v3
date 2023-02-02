import { RevokeGrantRequestBody } from './RevokeGrantRequestBody';


export class CancelGrantRequest {
    public body?: RevokeGrantRequestBody;
    public constructor() { 
    }
    public withBody(body: RevokeGrantRequestBody): CancelGrantRequest {
        this['body'] = body;
        return this;
    }
}