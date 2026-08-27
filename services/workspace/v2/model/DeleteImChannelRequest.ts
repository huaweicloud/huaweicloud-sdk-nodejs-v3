

export class DeleteImChannelRequest {
    public id?: string;
    public platform?: string;
    public constructor(id?: string, platform?: string) { 
        this['id'] = id;
        this['platform'] = platform;
    }
    public withId(id: string): DeleteImChannelRequest {
        this['id'] = id;
        return this;
    }
    public withPlatform(platform: string): DeleteImChannelRequest {
        this['platform'] = platform;
        return this;
    }
}