import { RestartCloudPhoneServerRequestBody } from './RestartCloudPhoneServerRequestBody';


export class RestartCloudPhoneServerRequest {
    public body?: RestartCloudPhoneServerRequestBody;
    public constructor() { 
    }
    public withBody(body: RestartCloudPhoneServerRequestBody): RestartCloudPhoneServerRequest {
        this['body'] = body;
        return this;
    }
}