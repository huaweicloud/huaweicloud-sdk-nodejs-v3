

export class ModifyDbAgentJobRequestBody {
    private 'profile_id'?: string;
    public constructor(profileId?: string) { 
        this['profile_id'] = profileId;
    }
    public withProfileId(profileId: string): ModifyDbAgentJobRequestBody {
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