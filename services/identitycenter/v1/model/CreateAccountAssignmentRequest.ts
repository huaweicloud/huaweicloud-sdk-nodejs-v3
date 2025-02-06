import { CreateAccountAssignmentReqBody } from './CreateAccountAssignmentReqBody';


export class CreateAccountAssignmentRequest {
    private 'instance_id'?: string;
    private 'X-Security-Token'?: string;
    public body?: CreateAccountAssignmentReqBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateAccountAssignmentRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXSecurityToken(xSecurityToken: string): CreateAccountAssignmentRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withBody(body: CreateAccountAssignmentReqBody): CreateAccountAssignmentRequest {
        this['body'] = body;
        return this;
    }
}