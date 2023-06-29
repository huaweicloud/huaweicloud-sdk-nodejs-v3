import { WebHookConfigRequest } from './WebHookConfigRequest';


export class SetWebHookConfigRequest {
    public body?: WebHookConfigRequest;
    public constructor() { 
    }
    public withBody(body: WebHookConfigRequest): SetWebHookConfigRequest {
        this['body'] = body;
        return this;
    }
}