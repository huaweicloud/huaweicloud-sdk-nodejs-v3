import { CreateIpGroupRequestBody } from './CreateIpGroupRequestBody';


export class CreateIpGroupRequest {
    public body?: CreateIpGroupRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateIpGroupRequestBody): CreateIpGroupRequest {
        this['body'] = body;
        return this;
    }
}