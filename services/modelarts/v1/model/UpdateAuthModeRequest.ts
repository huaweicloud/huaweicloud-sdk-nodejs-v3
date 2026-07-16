import { UpdateAuthModeRequestBody } from './UpdateAuthModeRequestBody';


export class UpdateAuthModeRequest {
    public body?: UpdateAuthModeRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateAuthModeRequestBody): UpdateAuthModeRequest {
        this['body'] = body;
        return this;
    }
}