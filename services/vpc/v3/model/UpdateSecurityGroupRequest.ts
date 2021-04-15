import { UpdateSecurityGroupRequestBody } from './UpdateSecurityGroupRequestBody';


export class UpdateSecurityGroupRequest {
    private 'security_group_id': string | undefined;
    public body?: UpdateSecurityGroupRequestBody;
    public constructor(securityGroupId?: any) { 
        this['security_group_id'] = securityGroupId;
    }
    public withSecurityGroupId(securityGroupId: string): UpdateSecurityGroupRequest {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withBody(body: UpdateSecurityGroupRequestBody): UpdateSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}