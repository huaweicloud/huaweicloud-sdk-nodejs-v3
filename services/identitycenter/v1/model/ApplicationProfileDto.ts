

export class ApplicationProfileDto {
    public name?: string;
    public status?: string;
    private 'profile_id'?: string;
    public constructor(name?: string, status?: string, profileId?: string) { 
        this['name'] = name;
        this['status'] = status;
        this['profile_id'] = profileId;
    }
    public withName(name: string): ApplicationProfileDto {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ApplicationProfileDto {
        this['status'] = status;
        return this;
    }
    public withProfileId(profileId: string): ApplicationProfileDto {
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