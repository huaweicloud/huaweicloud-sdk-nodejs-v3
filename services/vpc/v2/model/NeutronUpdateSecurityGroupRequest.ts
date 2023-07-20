import { NeutronUpdateSecurityGroupRequestBody } from './NeutronUpdateSecurityGroupRequestBody';


export class NeutronUpdateSecurityGroupRequest {
    private 'security_group_id'?: string;
    public body?: NeutronUpdateSecurityGroupRequestBody;
    public constructor(securityGroupId?: string) { 
        this['security_group_id'] = securityGroupId;
    }
    public withSecurityGroupId(securityGroupId: string): NeutronUpdateSecurityGroupRequest {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withBody(body: NeutronUpdateSecurityGroupRequestBody): NeutronUpdateSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}