import { RestartCloudPhoneRequestBody } from './RestartCloudPhoneRequestBody';


export class RestartCloudPhoneRequest {
    public body?: RestartCloudPhoneRequestBody;
    public constructor() { 
    }
    public withBody(body: RestartCloudPhoneRequestBody): RestartCloudPhoneRequest {
        this['body'] = body;
        return this;
    }
}