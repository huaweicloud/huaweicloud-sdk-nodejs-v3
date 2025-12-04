import { PushShareAppsRequestBody } from './PushShareAppsRequestBody';


export class PushShareAppsRequest {
    public body?: PushShareAppsRequestBody;
    public constructor() { 
    }
    public withBody(body: PushShareAppsRequestBody): PushShareAppsRequest {
        this['body'] = body;
        return this;
    }
}