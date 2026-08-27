

export class ImChannelConfig {
    public platform?: string;
    public enabled?: boolean;
    private 'client_id'?: string;
    private 'client_secret'?: string;
    private 'platform_specific'?: { [key: string]: string; };
    public constructor(platform?: string) { 
        this['platform'] = platform;
    }
    public withPlatform(platform: string): ImChannelConfig {
        this['platform'] = platform;
        return this;
    }
    public withEnabled(enabled: boolean): ImChannelConfig {
        this['enabled'] = enabled;
        return this;
    }
    public withClientId(clientId: string): ImChannelConfig {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withClientSecret(clientSecret: string): ImChannelConfig {
        this['client_secret'] = clientSecret;
        return this;
    }
    public set clientSecret(clientSecret: string  | undefined) {
        this['client_secret'] = clientSecret;
    }
    public get clientSecret(): string | undefined {
        return this['client_secret'];
    }
    public withPlatformSpecific(platformSpecific: { [key: string]: string; }): ImChannelConfig {
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