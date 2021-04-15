import { NeutronCreateSecurityGroupRequestBody } from './NeutronCreateSecurityGroupRequestBody';


export class NeutronCreateSecurityGroupRequest {
    public body?: NeutronCreateSecurityGroupRequestBody;
    public constructor() { 
    }
    public withBody(body: NeutronCreateSecurityGroupRequestBody): NeutronCreateSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}