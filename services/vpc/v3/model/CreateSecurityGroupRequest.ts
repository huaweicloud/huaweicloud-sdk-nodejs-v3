import { CreateSecurityGroupRequestBody } from './CreateSecurityGroupRequestBody';


export class CreateSecurityGroupRequest {
    public body?: CreateSecurityGroupRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSecurityGroupRequestBody): CreateSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}