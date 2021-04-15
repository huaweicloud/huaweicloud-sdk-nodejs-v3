import { CreateServerGroupRequestBody } from './CreateServerGroupRequestBody';


export class CreateServerGroupRequest {
    public body?: CreateServerGroupRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateServerGroupRequestBody): CreateServerGroupRequest {
        this['body'] = body;
        return this;
    }
}