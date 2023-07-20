

export class IdentityproviderOption {
    private 'sso_type'?: string;
    public description?: string;
    public enabled?: boolean;
    public constructor() { 
    }
    public withSsoType(ssoType: string): IdentityproviderOption {
        this['sso_type'] = ssoType;
        return this;
    }
    public set ssoType(ssoType: string  | undefined) {
        this['sso_type'] = ssoType;
    }
    public get ssoType(): string | undefined {
        return this['sso_type'];
    }
    public withDescription(description: string): IdentityproviderOption {
        this['description'] = description;
        return this;
    }
    public withEnabled(enabled: boolean): IdentityproviderOption {
        this['enabled'] = enabled;
        return this;
    }
}