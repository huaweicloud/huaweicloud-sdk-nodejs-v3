import { CreateSecurityGroupTagRequestBody } from './CreateSecurityGroupTagRequestBody';


export class CreateSecurityGroupTagRequest {
    private 'security_group_id'?: string;
    public body?: CreateSecurityGroupTagRequestBody;
    public constructor(securityGroupId?: string) { 
        this['security_group_id'] = securityGroupId;
    }
    public withSecurityGroupId(securityGroupId: string): CreateSecurityGroupTagRequest {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withBody(body: CreateSecurityGroupTagRequestBody): CreateSecurityGroupTagRequest {
        this['body'] = body;
        return this;
    }
}