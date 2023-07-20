

export class AuthInfo {
    private 'auth_type'?: string;
    public secret?: string;
    public fingerprint?: string;
    private 'secure_access'?: boolean;
    public timeout?: number;
    public constructor() { 
    }
    public withAuthType(authType: string): AuthInfo {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withSecret(secret: string): AuthInfo {
        this['secret'] = secret;
        return this;
    }
    public withFingerprint(fingerprint: string): AuthInfo {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withSecureAccess(secureAccess: boolean): AuthInfo {
        this['secure_access'] = secureAccess;
        return this;
    }
    public set secureAccess(secureAccess: boolean  | undefined) {
        this['secure_access'] = secureAccess;
    }
    public get secureAccess(): boolean | undefined {
        return this['secure_access'];
    }
    public withTimeout(timeout: number): AuthInfo {
        this['timeout'] = timeout;
        return this;
    }
}