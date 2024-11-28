

export class CustomPlatformAuthConfig {
    public key?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): CustomPlatformAuthConfig {
        this['key'] = key;
        return this;
    }
}