

export class BridgeAuthInfo {
    private 'auth_type'?: string;
    public secret?: string;
    public constructor() { 
    }
    public withAuthType(authType: string): BridgeAuthInfo {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withSecret(secret: string): BridgeAuthInfo {
        this['secret'] = secret;
        return this;
    }
}