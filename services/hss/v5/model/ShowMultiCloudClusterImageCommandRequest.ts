

export class ShowMultiCloudClusterImageCommandRequest {
    private 'image_repo'?: string;
    public organization?: string;
    public username?: string;
    public password?: string;
    private 'plug_type'?: string;
    public constructor(imageRepo?: string, organization?: string, username?: string, password?: string) { 
        this['image_repo'] = imageRepo;
        this['organization'] = organization;
        this['username'] = username;
        this['password'] = password;
    }
    public withImageRepo(imageRepo: string): ShowMultiCloudClusterImageCommandRequest {
        this['image_repo'] = imageRepo;
        return this;
    }
    public set imageRepo(imageRepo: string  | undefined) {
        this['image_repo'] = imageRepo;
    }
    public get imageRepo(): string | undefined {
        return this['image_repo'];
    }
    public withOrganization(organization: string): ShowMultiCloudClusterImageCommandRequest {
        this['organization'] = organization;
        return this;
    }
    public withUsername(username: string): ShowMultiCloudClusterImageCommandRequest {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): ShowMultiCloudClusterImageCommandRequest {
        this['password'] = password;
        return this;
    }
    public withPlugType(plugType: string): ShowMultiCloudClusterImageCommandRequest {
        this['plug_type'] = plugType;
        return this;
    }
    public set plugType(plugType: string  | undefined) {
        this['plug_type'] = plugType;
    }
    public get plugType(): string | undefined {
        return this['plug_type'];
    }
}