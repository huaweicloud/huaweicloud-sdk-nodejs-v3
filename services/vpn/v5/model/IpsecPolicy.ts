

export class IpsecPolicy {
    private 'authentication_algorithm'?: IpsecPolicyAuthenticationAlgorithmEnum | string;
    private 'encryption_algorithm'?: IpsecPolicyEncryptionAlgorithmEnum | string;
    public pfs?: string;
    private 'transform_protocol'?: IpsecPolicyTransformProtocolEnum | string;
    private 'lifetime_seconds'?: number;
    private 'encapsulation_mode'?: IpsecPolicyEncapsulationModeEnum | string;
    public constructor() { 
    }
    public withAuthenticationAlgorithm(authenticationAlgorithm: IpsecPolicyAuthenticationAlgorithmEnum | string): IpsecPolicy {
        this['authentication_algorithm'] = authenticationAlgorithm;
        return this;
    }
    public set authenticationAlgorithm(authenticationAlgorithm: IpsecPolicyAuthenticationAlgorithmEnum | string  | undefined) {
        this['authentication_algorithm'] = authenticationAlgorithm;
    }
    public get authenticationAlgorithm(): IpsecPolicyAuthenticationAlgorithmEnum | string | undefined {
        return this['authentication_algorithm'];
    }
    public withEncryptionAlgorithm(encryptionAlgorithm: IpsecPolicyEncryptionAlgorithmEnum | string): IpsecPolicy {
        this['encryption_algorithm'] = encryptionAlgorithm;
        return this;
    }
    public set encryptionAlgorithm(encryptionAlgorithm: IpsecPolicyEncryptionAlgorithmEnum | string  | undefined) {
        this['encryption_algorithm'] = encryptionAlgorithm;
    }
    public get encryptionAlgorithm(): IpsecPolicyEncryptionAlgorithmEnum | string | undefined {
        return this['encryption_algorithm'];
    }
    public withPfs(pfs: string): IpsecPolicy {
        this['pfs'] = pfs;
        return this;
    }
    public withTransformProtocol(transformProtocol: IpsecPolicyTransformProtocolEnum | string): IpsecPolicy {
        this['transform_protocol'] = transformProtocol;
        return this;
    }
    public set transformProtocol(transformProtocol: IpsecPolicyTransformProtocolEnum | string  | undefined) {
        this['transform_protocol'] = transformProtocol;
    }
    public get transformProtocol(): IpsecPolicyTransformProtocolEnum | string | undefined {
        return this['transform_protocol'];
    }
    public withLifetimeSeconds(lifetimeSeconds: number): IpsecPolicy {
        this['lifetime_seconds'] = lifetimeSeconds;
        return this;
    }
    public set lifetimeSeconds(lifetimeSeconds: number  | undefined) {
        this['lifetime_seconds'] = lifetimeSeconds;
    }
    public get lifetimeSeconds(): number | undefined {
        return this['lifetime_seconds'];
    }
    public withEncapsulationMode(encapsulationMode: IpsecPolicyEncapsulationModeEnum | string): IpsecPolicy {
        this['encapsulation_mode'] = encapsulationMode;
        return this;
    }
    public set encapsulationMode(encapsulationMode: IpsecPolicyEncapsulationModeEnum | string  | undefined) {
        this['encapsulation_mode'] = encapsulationMode;
    }
    public get encapsulationMode(): IpsecPolicyEncapsulationModeEnum | string | undefined {
        return this['encapsulation_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IpsecPolicyAuthenticationAlgorithmEnum {
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
export enum IpsecPolicyEncryptionAlgorithmEnum {
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
export enum IpsecPolicyTransformProtocolEnum {
    ESP = 'esp'
}
/**
    * @export
    * @enum {string}
    */
export enum IpsecPolicyEncapsulationModeEnum {
    TUNNEL = 'tunnel'
}
