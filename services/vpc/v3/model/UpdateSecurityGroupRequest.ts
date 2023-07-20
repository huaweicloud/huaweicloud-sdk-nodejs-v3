import { UpdateSecurityGroupRequestBody } from './UpdateSecurityGroupRequestBody';


export class UpdateSecurityGroupRequest {
    private 'security_group_id'?: string;
    public body?: UpdateSecurityGroupRequestBody;
    public constructor(securityGroupId?: string) { 
        this['security_group_id'] = securityGroupId;
    }
    public withSecurityGroupId(securityGroupId: string): UpdateSecurityGroupRequest {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withBody(body: UpdateSecurityGroupRequestBody): UpdateSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}