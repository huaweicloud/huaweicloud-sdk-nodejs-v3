

export class VgwIkePolicy {
    private 'encryption_algorithm'?: string;
    private 'dh_group'?: string;
    private 'authentication_algorithm'?: string;
    private 'lifetime_seconds'?: number;
    public constructor() { 
    }
    public withEncryptionAlgorithm(encryptionAlgorithm: string): VgwIkePolicy {
        this['encryption_algorithm'] = encryptionAlgorithm;
        return this;
    }
    public set encryptionAlgorithm(encryptionAlgorithm: string  | undefined) {
        this['encryption_algorithm'] = encryptionAlgorithm;
    }
    public get encryptionAlgorithm(): string | undefined {
        return this['encryption_algorithm'];
    }
    public withDhGroup(dhGroup: string): VgwIkePolicy {
        this['dh_group'] = dhGroup;
        return this;
    }
    public set dhGroup(dhGroup: string  | undefined) {
        this['dh_group'] = dhGroup;
    }
    public get dhGroup(): string | undefined {
        return this['dh_group'];
    }
    public withAuthenticationAlgorithm(authenticationAlgorithm: string): VgwIkePolicy {
        this['authentication_algorithm'] = authenticationAlgorithm;
        return this;
    }
    public set authenticationAlgorithm(authenticationAlgorithm: string  | undefined) {
        this['authentication_algorithm'] = authenticationAlgorithm;
    }
    public get authenticationAlgorithm(): string | undefined {
        return this['authentication_algorithm'];
    }
    public withLifetimeSeconds(lifetimeSeconds: number): VgwIkePolicy {
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