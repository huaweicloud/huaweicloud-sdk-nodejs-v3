

export class ImChannelItem {
    public platform?: string;
    public enabled?: boolean;
    private 'client_id'?: string;
    private 'platform_specific'?: { [key: string]: string; };
    public constructor(platform?: string) { 
        this['platform'] = platform;
    }
    public withPlatform(platform: string): ImChannelItem {
        this['platform'] = platform;
        return this;
    }
    public withEnabled(enabled: boolean): ImChannelItem {
        this['enabled'] = enabled;
        return this;
    }
    public withClientId(clientId: string): ImChannelItem {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withPlatformSpecific(platformSpecific: { [key: string]: string; }): ImChannelItem {
        this['platform_specific'] = platformSpecific;
        return this;
    }
    public set platformSpecific(platformSpecific: { [key: string]: string; }  | undefined) {
        this['platform_specific'] = platformSpecific;
    }
    public get platformSpecific(): { [key: string]: string; } | undefined {
        return this['platform_specific'];
    }
}