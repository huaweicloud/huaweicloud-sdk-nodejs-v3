import { RunAuthorizationActionRequestBody } from './RunAuthorizationActionRequestBody';


export class RunAuthorizationActionRequest {
    public body?: RunAuthorizationActionRequestBody;
    public constructor() { 
    }
    public withBody(body: RunAuthorizationActionRequestBody): RunAuthorizationActionRequest {
        this['body'] = body;
        return this;
    }
}