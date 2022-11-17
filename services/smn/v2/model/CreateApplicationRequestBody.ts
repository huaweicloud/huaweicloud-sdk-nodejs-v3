

export class CreateApplicationRequestBody {
    public name: string;
    public platform: string;
    private 'platform_principal': string | undefined;
    private 'platform_credential': string | undefined;
    public constructor(name?: any, platform?: any, platformPrincipal?: any, platformCredential?: any) { 
        this['name'] = name;
        this['platform'] = platform;
        this['platform_principal'] = platformPrincipal;
        this['platform_credential'] = platformCredential;
    }
    public withName(name: string): CreateApplicationRequestBody {
        this['name'] = name;
        return this;
    }
    public withPlatform(platform: string): CreateApplicationRequestBody {
        this['platform'] = platform;
        return this;
    }
    public withPlatformPrincipal(platformPrincipal: string): CreateApplicationRequestBody {
        this['platform_principal'] = platformPrincipal;
        return this;
    }
    public set platformPrincipal(platformPrincipal: string | undefined) {
        this['platform_principal'] = platformPrincipal;
    }
    public get platformPrincipal() {
        return this['platform_principal'];
    }
    public withPlatformCredential(platformCredential: string): CreateApplicationRequestBody {
        this['platform_credential'] = platformCredential;
        return this;
    }
    public set platformCredential(platformCredential: string | undefined) {
        this['platform_credential'] = platformCredential;
    }
    public get platformCredential() {
        return this['platform_credential'];
    }
}