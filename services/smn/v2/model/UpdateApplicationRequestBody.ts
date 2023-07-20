

export class UpdateApplicationRequestBody {
    private 'platform_principal'?: string;
    private 'platform_credential'?: string;
    public constructor(platformPrincipal?: string, platformCredential?: string) { 
        this['platform_principal'] = platformPrincipal;
        this['platform_credential'] = platformCredential;
    }
    public withPlatformPrincipal(platformPrincipal: string): UpdateApplicationRequestBody {
        this['platform_principal'] = platformPrincipal;
        return this;
    }
    public set platformPrincipal(platformPrincipal: string  | undefined) {
        this['platform_principal'] = platformPrincipal;
    }
    public get platformPrincipal(): string | undefined {
        return this['platform_principal'];
    }
    public withPlatformCredential(platformCredential: string): UpdateApplicationRequestBody {
        this['platform_credential'] = platformCredential;
        return this;
    }
    public set platformCredential(platformCredential: string  | undefined) {
        this['platform_credential'] = platformCredential;
    }
    public get platformCredential(): string | undefined {
        return this['platform_credential'];
    }
}