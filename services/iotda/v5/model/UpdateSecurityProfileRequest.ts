import { UpdateSecurityProfileDTO } from './UpdateSecurityProfileDTO';


export class UpdateSecurityProfileRequest {
    private 'Instance-Id'?: string;
    private 'profile_id'?: string;
    public body?: UpdateSecurityProfileDTO;
    public constructor(profileId?: string) { 
        this['profile_id'] = profileId;
    }
    public withInstanceId(instanceId: string): UpdateSecurityProfileRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withProfileId(profileId: string): UpdateSecurityProfileRequest {
        this['profile_id'] = profileId;
        return this;
    }
    public set profileId(profileId: string  | undefined) {
        this['profile_id'] = profileId;
    }
    public get profileId(): string | undefined {
        return this['profile_id'];
    }
    public withBody(body: UpdateSecurityProfileDTO): UpdateSecurityProfileRequest {
        this['body'] = body;
        return this;
    }
}