

export class ListProfilesRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    private 'application_instance_id'?: string;
    public constructor(instanceId?: string, applicationInstanceId?: string) { 
        this['instance_id'] = instanceId;
        this['application_instance_id'] = applicationInstanceId;
    }
    public withXSecurityToken(xSecurityToken: string): ListProfilesRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): ListProfilesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withApplicationInstanceId(applicationInstanceId: string): ListProfilesRequest {
        this['application_instance_id'] = applicationInstanceId;
        return this;
    }
    public set applicationInstanceId(applicationInstanceId: string  | undefined) {
        this['application_instance_id'] = applicationInstanceId;
    }
    public get applicationInstanceId(): string | undefined {
        return this['application_instance_id'];
    }
}