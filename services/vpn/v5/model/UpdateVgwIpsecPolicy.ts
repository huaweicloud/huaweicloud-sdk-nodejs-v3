

export class UpdateVgwIpsecPolicy {
    private 'authentication_algorithm'?: UpdateVgwIpsecPolicyAuthenticationAlgorithmEnum | string;
    private 'encryption_algorithm'?: UpdateVgwIpsecPolicyEncryptionAlgorithmEnum | string;
    public pfs?: UpdateVgwIpsecPolicyPfsEnum | string;
    private 'lifetime_seconds'?: number;
    public constructor() { 
    }
    public withAuthenticationAlgorithm(authenticationAlgorithm: UpdateVgwIpsecPolicyAuthenticationAlgorithmEnum | string): UpdateVgwIpsecPolicy {
        this['authentication_algorithm'] = authenticationAlgorithm;
        return this;
    }
    public set authenticationAlgorithm(authenticationAlgorithm: UpdateVgwIpsecPolicyAuthenticationAlgorithmEnum | string  | undefined) {
        this['authentication_algorithm'] = authenticationAlgorithm;
    }
    public get authenticationAlgorithm(): UpdateVgwIpsecPolicyAuthenticationAlgorithmEnum | string | undefined {
        return this['authentication_algorithm'];
    }
    public withEncryptionAlgorithm(encryptionAlgorithm: UpdateVgwIpsecPolicyEncryptionAlgorithmEnum | string): UpdateVgwIpsecPolicy {
        this['encryption_algorithm'] = encryptionAlgorithm;
        return this;
    }
    public set encryptionAlgorithm(encryptionAlgorithm: UpdateVgwIpsecPolicyEncryptionAlgorithmEnum | string  | undefined) {
        this['encryption_algorithm'] = encryptionAlgorithm;
    }
    public get encryptionAlgorithm(): UpdateVgwIpsecPolicyEncryptionAlgorithmEnum | string | undefined {
        return this['encryption_algorithm'];
    }
    public withPfs(pfs: UpdateVgwIpsecPolicyPfsEnum | string): UpdateVgwIpsecPolicy {
        this['pfs'] = pfs;
        return this;
    }
    public withLifetimeSeconds(lifetimeSeconds: number): UpdateVgwIpsecPolicy {
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

/**
    * @export
    * @enum {string}
    */
export enum UpdateVgwIpsecPolicyAuthenticationAlgorithmEnum {
    SHA2_256 = 'sha2-256',
    SHA2_384 = 'sha2-384',
    SHA2_512 = 'sha2-512'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateVgwIpsecPolicyEncryptionAlgorithmEnum {
    AES_128 = 'aes-128',
    AES_192 = 'aes-192',
    AES_256 = 'aes-256',
    AES_128_GCM_16 = 'aes-128-gcm-16',
    AES_256_GCM_16 = 'aes-256-gcm-16'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateVgwIpsecPolicyPfsEnum {
    GROUP14 = 'group14',
    GROUP15 = 'group15',
    GROUP16 = 'group16',
    GROUP19 = 'group19',
    GROUP20 = 'group20',
    GROUP21 = 'group21',
    DISABLE = 'disable'
}
