import { DeleteCloudPhoneServerRequestBody } from './DeleteCloudPhoneServerRequestBody';


export class DeleteCloudPhoneServerRequest {
    public body?: DeleteCloudPhoneServerRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteCloudPhoneServerRequestBody): DeleteCloudPhoneServerRequest {
        this['body'] = body;
        return this;
    }
}