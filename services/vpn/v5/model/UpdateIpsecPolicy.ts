

export class UpdateIpsecPolicy {
    private 'authentication_algorithm'?: UpdateIpsecPolicyAuthenticationAlgorithmEnum | string;
    private 'encryption_algorithm'?: UpdateIpsecPolicyEncryptionAlgorithmEnum | string;
    public pfs?: string;
    private 'transform_protocol'?: UpdateIpsecPolicyTransformProtocolEnum | string;
    private 'lifetime_seconds'?: number;
    private 'encapsulation_mode'?: UpdateIpsecPolicyEncapsulationModeEnum | string;
    public constructor() { 
    }
    public withAuthenticationAlgorithm(authenticationAlgorithm: UpdateIpsecPolicyAuthenticationAlgorithmEnum | string): UpdateIpsecPolicy {
        this['authentication_algorithm'] = authenticationAlgorithm;
        return this;
    }
    public set authenticationAlgorithm(authenticationAlgorithm: UpdateIpsecPolicyAuthenticationAlgorithmEnum | string  | undefined) {
        this['authentication_algorithm'] = authenticationAlgorithm;
    }
    public get authenticationAlgorithm(): UpdateIpsecPolicyAuthenticationAlgorithmEnum | string | undefined {
        return this['authentication_algorithm'];
    }
    public withEncryptionAlgorithm(encryptionAlgorithm: UpdateIpsecPolicyEncryptionAlgorithmEnum | string): UpdateIpsecPolicy {
        this['encryption_algorithm'] = encryptionAlgorithm;
        return this;
    }
    public set encryptionAlgorithm(encryptionAlgorithm: UpdateIpsecPolicyEncryptionAlgorithmEnum | string  | undefined) {
        this['encryption_algorithm'] = encryptionAlgorithm;
    }
    public get encryptionAlgorithm(): UpdateIpsecPolicyEncryptionAlgorithmEnum | string | undefined {
        return this['encryption_algorithm'];
    }
    public withPfs(pfs: string): UpdateIpsecPolicy {
        this['pfs'] = pfs;
        return this;
    }
    public withTransformProtocol(transformProtocol: UpdateIpsecPolicyTransformProtocolEnum | string): UpdateIpsecPolicy {
        this['transform_protocol'] = transformProtocol;
        return this;
    }
    public set transformProtocol(transformProtocol: UpdateIpsecPolicyTransformProtocolEnum | string  | undefined) {
        this['transform_protocol'] = transformProtocol;
    }
    public get transformProtocol(): UpdateIpsecPolicyTransformProtocolEnum | string | undefined {
        return this['transform_protocol'];
    }
    public withLifetimeSeconds(lifetimeSeconds: number): UpdateIpsecPolicy {
        this['lifetime_seconds'] = lifetimeSeconds;
        return this;
    }
    public set lifetimeSeconds(lifetimeSeconds: number  | undefined) {
        this['lifetime_seconds'] = lifetimeSeconds;
    }
    public get lifetimeSeconds(): number | undefined {
        return this['lifetime_seconds'];
    }
    public withEncapsulationMode(encapsulationMode: UpdateIpsecPolicyEncapsulationModeEnum | string): UpdateIpsecPolicy {
        this['encapsulation_mode'] = encapsulationMode;
        return this;
    }
    public set encapsulationMode(encapsulationMode: UpdateIpsecPolicyEncapsulationModeEnum | string  | undefined) {
        this['encapsulation_mode'] = encapsulationMode;
    }
    public get encapsulationMode(): UpdateIpsecPolicyEncapsulationModeEnum | string | undefined {
        return this['encapsulation_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateIpsecPolicyAuthenticationAlgorithmEnum {
    SHA1 = 'sha1',
    MD5 = 'md5',
    SHA2_256 = 'sha2-256',
    SHA2_384 = 'sha2-384',
    SHA2_512 = 'sha2-512'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateIpsecPolicyEncryptionAlgorithmEnum {
    E_3DES = '3des',
    AES_128 = 'aes-128',
    AES_192 = 'aes-192',
    AES_256 = 'aes-256',
    AES_128_GCM_16 = 'aes-128-gcm-16',
    AES_256_GCM_16 = 'aes-256-gcm-16',
    AES_128_GCM_128 = 'aes-128-gcm-128',
    AES_256_GCM_128 = 'aes-256-gcm-128'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateIpsecPolicyTransformProtocolEnum {
    ESP = 'esp'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateIpsecPolicyEncapsulationModeEnum {
    TUNNEL = 'tunnel'
}
