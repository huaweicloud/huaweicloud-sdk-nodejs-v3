import { UpdateCloudPhonePropertyRequestBody } from './UpdateCloudPhonePropertyRequestBody';


export class UpdateCloudPhonePropertyRequest {
    public body?: UpdateCloudPhonePropertyRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateCloudPhonePropertyRequestBody): UpdateCloudPhonePropertyRequest {
        this['body'] = body;
        return this;
    }
}