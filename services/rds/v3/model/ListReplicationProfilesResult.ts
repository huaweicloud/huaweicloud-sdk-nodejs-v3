

export class ListReplicationProfilesResult {
    private 'profile_id'?: string;
    private 'profile_name'?: string;
    private 'agent_type'?: string;
    public description?: string;
    private 'is_def_profile'?: boolean;
    public constructor() { 
    }
    public withProfileId(profileId: string): ListReplicationProfilesResult {
        this['profile_id'] = profileId;
        return this;
    }
    public set profileId(profileId: string  | undefined) {
        this['profile_id'] = profileId;
    }
    public get profileId(): string | undefined {
        return this['profile_id'];
    }
    public withProfileName(profileName: string): ListReplicationProfilesResult {
        this['profile_name'] = profileName;
        return this;
    }
    public set profileName(profileName: string  | undefined) {
        this['profile_name'] = profileName;
    }
    public get profileName(): string | undefined {
        return this['profile_name'];
    }
    public withAgentType(agentType: string): ListReplicationProfilesResult {
        this['agent_type'] = agentType;
        return this;
    }
    public set agentType(agentType: string  | undefined) {
        this['agent_type'] = agentType;
    }
    public get agentType(): string | undefined {
        return this['agent_type'];
    }
    public withDescription(description: string): ListReplicationProfilesResult {
        this['description'] = description;
        return this;
    }
    public withIsDefProfile(isDefProfile: boolean): ListReplicationProfilesResult {
        this['is_def_profile'] = isDefProfile;
        return this;
    }
    public set isDefProfile(isDefProfile: boolean  | undefined) {
        this['is_def_profile'] = isDefProfile;
    }
    public get isDefProfile(): boolean | undefined {
        return this['is_def_profile'];
    }
}