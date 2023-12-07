import { UpdateJobAuthInfoRequestBody } from './UpdateJobAuthInfoRequestBody';


export class UpdateJobAuthInfoRequest {
    public body?: UpdateJobAuthInfoRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateJobAuthInfoRequestBody): UpdateJobAuthInfoRequest {
        this['body'] = body;
        return this;
    }
}