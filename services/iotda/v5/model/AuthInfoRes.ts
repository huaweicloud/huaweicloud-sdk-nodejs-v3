

export class AuthInfoRes {
    private 'auth_type'?: string;
    public secret?: string;
    private 'secondary_secret'?: string;
    public fingerprint?: string;
    private 'secondary_fingerprint'?: string;
    private 'secure_access'?: boolean;
    public timeout?: number;
    public constructor() { 
    }
    public withAuthType(authType: string): AuthInfoRes {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withSecret(secret: string): AuthInfoRes {
        this['secret'] = secret;
        return this;
    }
    public withSecondarySecret(secondarySecret: string): AuthInfoRes {
        this['secondary_secret'] = secondarySecret;
        return this;
    }
    public set secondarySecret(secondarySecret: string  | undefined) {
        this['secondary_secret'] = secondarySecret;
    }
    public get secondarySecret(): string | undefined {
        return this['secondary_secret'];
    }
    public withFingerprint(fingerprint: string): AuthInfoRes {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withSecondaryFingerprint(secondaryFingerprint: string): AuthInfoRes {
        this['secondary_fingerprint'] = secondaryFingerprint;
        return this;
    }
    public set secondaryFingerprint(secondaryFingerprint: string  | undefined) {
        this['secondary_fingerprint'] = secondaryFingerprint;
    }
    public get secondaryFingerprint(): string | undefined {
        return this['secondary_fingerprint'];
    }
    public withSecureAccess(secureAccess: boolean): AuthInfoRes {
        this['secure_access'] = secureAccess;
        return this;
    }
    public set secureAccess(secureAccess: boolean  | undefined) {
        this['secure_access'] = secureAccess;
    }
    public get secureAccess(): boolean | undefined {
        return this['secure_access'];
    }
    public withTimeout(timeout: number): AuthInfoRes {
        this['timeout'] = timeout;
        return this;
    }
}