import { UpdateAuthInfoRequestBody } from './UpdateAuthInfoRequestBody';


export class UpdateAuthInfoRequest {
    public body?: UpdateAuthInfoRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateAuthInfoRequestBody): UpdateAuthInfoRequest {
        this['body'] = body;
        return this;
    }
}