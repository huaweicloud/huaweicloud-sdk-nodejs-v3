import { StopCloudPhoneRequestBody } from './StopCloudPhoneRequestBody';


export class StopCloudPhoneRequest {
    public body?: StopCloudPhoneRequestBody;
    public constructor() { 
    }
    public withBody(body: StopCloudPhoneRequestBody): StopCloudPhoneRequest {
        this['body'] = body;
        return this;
    }
}