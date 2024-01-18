

export class VgwIpsecPolicy {
    private 'authentication_algorithm'?: string;
    private 'encryption_algorithm'?: string;
    public pfs?: string;
    private 'lifetime_seconds'?: number;
    public constructor() { 
    }
    public withAuthenticationAlgorithm(authenticationAlgorithm: string): VgwIpsecPolicy {
        this['authentication_algorithm'] = authenticationAlgorithm;
        return this;
    }
    public set authenticationAlgorithm(authenticationAlgorithm: string  | undefined) {
        this['authentication_algorithm'] = authenticationAlgorithm;
    }
    public get authenticationAlgorithm(): string | undefined {
        return this['authentication_algorithm'];
    }
    public withEncryptionAlgorithm(encryptionAlgorithm: string): VgwIpsecPolicy {
        this['encryption_algorithm'] = encryptionAlgorithm;
        return this;
    }
    public set encryptionAlgorithm(encryptionAlgorithm: string  | undefined) {
        this['encryption_algorithm'] = encryptionAlgorithm;
    }
    public get encryptionAlgorithm(): string | undefined {
        return this['encryption_algorithm'];
    }
    public withPfs(pfs: string): VgwIpsecPolicy {
        this['pfs'] = pfs;
        return this;
    }
    public withLifetimeSeconds(lifetimeSeconds: number): VgwIpsecPolicy {
        this['lifetime_seconds'] = lifetimeSeconds;
        return this;
    }
    public set lifetimeSeconds(lifetimeSeconds: number  | undefined) {
        this['lifetime_seconds'] = lifetimeSeconds;
    }
    public get lifetimeSeconds(): number | undefined {
        return this['lifetime_seconds'];
    }
}