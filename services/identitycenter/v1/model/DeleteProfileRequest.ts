

export class DeleteProfileRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    private 'application_instance_id'?: string;
    private 'profile_id'?: string;
    public constructor(instanceId?: string, applicationInstanceId?: string, profileId?: string) { 
        this['instance_id'] = instanceId;
        this['application_instance_id'] = applicationInstanceId;
        this['profile_id'] = profileId;
    }
    public withXSecurityToken(xSecurityToken: string): DeleteProfileRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): DeleteProfileRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withApplicationInstanceId(applicationInstanceId: string): DeleteProfileRequest {
        this['application_instance_id'] = applicationInstanceId;
        return this;
    }
    public set applicationInstanceId(applicationInstanceId: string  | undefined) {
        this['application_instance_id'] = applicationInstanceId;
    }
    public get applicationInstanceId(): string | undefined {
        return this['application_instance_id'];
    }
    public withProfileId(profileId: string): DeleteProfileRequest {
        this['profile_id'] = profileId;
        return this;
    }
    public set profileId(profileId: string  | undefined) {
        this['profile_id'] = profileId;
    }
    public get profileId(): string | undefined {
        return this['profile_id'];
    }
}