import { CreateApplicationInstanceReqBody } from './CreateApplicationInstanceReqBody';


export class CreateApplicationInstanceRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    public body?: CreateApplicationInstanceReqBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXSecurityToken(xSecurityToken: string): CreateApplicationInstanceRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): CreateApplicationInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateApplicationInstanceReqBody): CreateApplicationInstanceRequest {
        this['body'] = body;
        return this;
    }
}