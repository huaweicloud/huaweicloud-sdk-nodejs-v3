

export class DeleteSecurityProfileRequest {
    private 'Instance-Id'?: string;
    private 'profile_id'?: string;
    public constructor(profileId?: string) { 
        this['profile_id'] = profileId;
    }
    public withInstanceId(instanceId: string): DeleteSecurityProfileRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withProfileId(profileId: string): DeleteSecurityProfileRequest {
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