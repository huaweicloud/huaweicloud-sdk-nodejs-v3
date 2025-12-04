import { ChangeCloudPhoneServerModelRequestBody } from './ChangeCloudPhoneServerModelRequestBody';


export class ChangeCloudPhoneServerModelRequest {
    public body?: ChangeCloudPhoneServerModelRequestBody;
    public constructor() { 
    }
    public withBody(body: ChangeCloudPhoneServerModelRequestBody): ChangeCloudPhoneServerModelRequest {
        this['body'] = body;
        return this;
    }
}