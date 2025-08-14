import { DisassociateProfileReqBody } from './DisassociateProfileReqBody';


export class DisassociateProfileRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    public body?: DisassociateProfileReqBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXSecurityToken(xSecurityToken: string): DisassociateProfileRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): DisassociateProfileRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DisassociateProfileReqBody): DisassociateProfileRequest {
        this['body'] = body;
        return this;
    }
}