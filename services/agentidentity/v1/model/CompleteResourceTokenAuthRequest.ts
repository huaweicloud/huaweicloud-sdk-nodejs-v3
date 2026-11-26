import { CompleteResourceTokenAuthRequestBody } from './CompleteResourceTokenAuthRequestBody';


export class CompleteResourceTokenAuthRequest {
    public body?: CompleteResourceTokenAuthRequestBody;
    public constructor() { 
    }
    public withBody(body: CompleteResourceTokenAuthRequestBody): CompleteResourceTokenAuthRequest {
        this['body'] = body;
        return this;
    }
}