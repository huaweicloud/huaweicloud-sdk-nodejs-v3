import { UpdateInstanceAccessControlAttributeConfigurationReqBody } from './UpdateInstanceAccessControlAttributeConfigurationReqBody';


export class UpdateInstanceAccessControlAttributeConfigurationRequest {
    private 'instance_id'?: string;
    private 'X-Security-Token'?: string;
    public body?: UpdateInstanceAccessControlAttributeConfigurationReqBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceAccessControlAttributeConfigurationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXSecurityToken(xSecurityToken: string): UpdateInstanceAccessControlAttributeConfigurationRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: UpdateInstanceAccessControlAttributeConfigurationReqBody): UpdateInstanceAccessControlAttributeConfigurationRequest {
        this['body'] = body;
        return this;
    }
}