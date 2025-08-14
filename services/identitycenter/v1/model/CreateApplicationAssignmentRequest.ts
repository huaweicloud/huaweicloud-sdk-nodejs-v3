import { CreateApplicationAssignmentReqBody } from './CreateApplicationAssignmentReqBody';


export class CreateApplicationAssignmentRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    private 'application_instance_id'?: string;
    public body?: CreateApplicationAssignmentReqBody;
    public constructor(instanceId?: string, applicationInstanceId?: string) { 
        this['instance_id'] = instanceId;
        this['application_instance_id'] = applicationInstanceId;
    }
    public withXSecurityToken(xSecurityToken: string): CreateApplicationAssignmentRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): CreateApplicationAssignmentRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withApplicationInstanceId(applicationInstanceId: string): CreateApplicationAssignmentRequest {
        this['application_instance_id'] = applicationInstanceId;
        return this;
    }
    public set applicationInstanceId(applicationInstanceId: string  | undefined) {
        this['application_instance_id'] = applicationInstanceId;
    }
    public get applicationInstanceId(): string | undefined {
        return this['application_instance_id'];
    }
    public withBody(body: CreateApplicationAssignmentReqBody): CreateApplicationAssignmentRequest {
        this['body'] = body;
        return this;
    }
}