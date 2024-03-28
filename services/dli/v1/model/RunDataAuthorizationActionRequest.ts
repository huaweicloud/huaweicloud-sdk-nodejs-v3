import { RunDataAuthorizationActionRequestBody } from './RunDataAuthorizationActionRequestBody';


export class RunDataAuthorizationActionRequest {
    public body?: RunDataAuthorizationActionRequestBody;
    public constructor() { 
    }
    public withBody(body: RunDataAuthorizationActionRequestBody): RunDataAuthorizationActionRequest {
        this['body'] = body;
        return this;
    }
}