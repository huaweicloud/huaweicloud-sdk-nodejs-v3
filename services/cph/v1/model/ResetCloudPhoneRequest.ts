import { ResetCloudPhoneRequestBody } from './ResetCloudPhoneRequestBody';


export class ResetCloudPhoneRequest {
    public body?: ResetCloudPhoneRequestBody;
    public constructor() { 
    }
    public withBody(body: ResetCloudPhoneRequestBody): ResetCloudPhoneRequest {
        this['body'] = body;
        return this;
    }
}