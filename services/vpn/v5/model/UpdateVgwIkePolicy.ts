

export class UpdateVgwIkePolicy {
    private 'authentication_algorithm'?: UpdateVgwIkePolicyAuthenticationAlgorithmEnum | string;
    private 'encryption_algorithm'?: UpdateVgwIkePolicyEncryptionAlgorithmEnum | string;
    private 'dh_group'?: UpdateVgwIkePolicyDhGroupEnum | string;
    private 'lifetime_seconds'?: number;
    public constructor() { 
    }
    public withAuthenticationAlgorithm(authenticationAlgorithm: UpdateVgwIkePolicyAuthenticationAlgorithmEnum | string): UpdateVgwIkePolicy {
        this['authentication_algorithm'] = authenticationAlgorithm;
        return this;
    }
    public set authenticationAlgorithm(authenticationAlgorithm: UpdateVgwIkePolicyAuthenticationAlgorithmEnum | string  | undefined) {
        this['authentication_algorithm'] = authenticationAlgorithm;
    }
    public get authenticationAlgorithm(): UpdateVgwIkePolicyAuthenticationAlgorithmEnum | string | undefined {
        return this['authentication_algorithm'];
    }
    public withEncryptionAlgorithm(encryptionAlgorithm: UpdateVgwIkePolicyEncryptionAlgorithmEnum | string): UpdateVgwIkePolicy {
        this['encryption_algorithm'] = encryptionAlgorithm;
        return this;
    }
    public set encryptionAlgorithm(encryptionAlgorithm: UpdateVgwIkePolicyEncryptionAlgorithmEnum | string  | undefined) {
        this['encryption_algorithm'] = encryptionAlgorithm;
    }
    public get encryptionAlgorithm(): UpdateVgwIkePolicyEncryptionAlgorithmEnum | string | undefined {
        return this['encryption_algorithm'];
    }
    public withDhGroup(dhGroup: UpdateVgwIkePolicyDhGroupEnum | string): UpdateVgwIkePolicy {
        this['dh_group'] = dhGroup;
        return this;
    }
    public set dhGroup(dhGroup: UpdateVgwIkePolicyDhGroupEnum | string  | undefined) {
        this['dh_group'] = dhGroup;
    }
    public get dhGroup(): UpdateVgwIkePolicyDhGroupEnum | string | undefined {
        return this['dh_group'];
    }
    public withLifetimeSeconds(lifetimeSeconds: number): UpdateVgwIkePolicy {
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
export enum UpdateVgwIkePolicyAuthenticationAlgorithmEnum {
    SHA2_256 = 'sha2-256',
    SHA2_384 = 'sha2-384',
    SHA2_512 = 'sha2-512'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateVgwIkePolicyEncryptionAlgorithmEnum {
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
export enum UpdateVgwIkePolicyDhGroupEnum {
    GROUP14 = 'group14',
    GROUP15 = 'group15',
    GROUP16 = 'group16',
    GROUP19 = 'group19',
    GROUP20 = 'group20',
    GROUP21 = 'group21'
}
