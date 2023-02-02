import { RevokeGrantRequestBody } from './RevokeGrantRequestBody';


export class CancelSelfGrantRequest {
    public body?: RevokeGrantRequestBody;
    public constructor() { 
    }
    public withBody(body: RevokeGrantRequestBody): CancelSelfGrantRequest {
        this['body'] = body;
        return this;
    }
}