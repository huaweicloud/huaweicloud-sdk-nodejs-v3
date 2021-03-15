

export class AuthInfoWithoutSecret {
    private 'secure_access'?: boolean | undefined;
    public timeout?: number;
    public constructor() { 
    }
    public withSecureAccess(secureAccess: boolean): AuthInfoWithoutSecret {
        this['secure_access'] = secureAccess;
        return this;
    }
    public set secureAccess(secureAccess: boolean | undefined) {
        this['secure_access'] = secureAccess;
    }
    public get secureAccess() {
        return this['secure_access'];
    }
    public withTimeout(timeout: number): AuthInfoWithoutSecret {
        this['timeout'] = timeout;
        return this;
    }
}