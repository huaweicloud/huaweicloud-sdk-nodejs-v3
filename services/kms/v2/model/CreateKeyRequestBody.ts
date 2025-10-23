

export class CreateKeyRequestBody {
    private 'key_alias'?: string;
    private 'key_spec'?: CreateKeyRequestBodyKeySpecEnum | string;
    private 'key_usage'?: CreateKeyRequestBodyKeyUsageEnum | string;
    private 'key_description'?: string;
    public origin?: CreateKeyRequestBodyOriginEnum | string;
    private 'enterprise_project_id'?: string;
    public sequence?: string;
    private 'keystore_id'?: string;
    private 'vm_id'?: string;
    public constructor(keyAlias?: string) { 
        this['key_alias'] = keyAlias;
    }
    public withKeyAlias(keyAlias: string): CreateKeyRequestBody {
        this['key_alias'] = keyAlias;
        return this;
    }
    public set keyAlias(keyAlias: string  | undefined) {
        this['key_alias'] = keyAlias;
    }
    public get keyAlias(): string | undefined {
        return this['key_alias'];
    }
    public withKeySpec(keySpec: CreateKeyRequestBodyKeySpecEnum | string): CreateKeyRequestBody {
        this['key_spec'] = keySpec;
        return this;
    }
    public set keySpec(keySpec: CreateKeyRequestBodyKeySpecEnum | string  | undefined) {
        this['key_spec'] = keySpec;
    }
    public get keySpec(): CreateKeyRequestBodyKeySpecEnum | string | undefined {
        return this['key_spec'];
    }
    public withKeyUsage(keyUsage: CreateKeyRequestBodyKeyUsageEnum | string): CreateKeyRequestBody {
        this['key_usage'] = keyUsage;
        return this;
    }
    public set keyUsage(keyUsage: CreateKeyRequestBodyKeyUsageEnum | string  | undefined) {
        this['key_usage'] = keyUsage;
    }
    public get keyUsage(): CreateKeyRequestBodyKeyUsageEnum | string | undefined {
        return this['key_usage'];
    }
    public withKeyDescription(keyDescription: string): CreateKeyRequestBody {
        this['key_description'] = keyDescription;
        return this;
    }
    public set keyDescription(keyDescription: string  | undefined) {
        this['key_description'] = keyDescription;
    }
    public get keyDescription(): string | undefined {
        return this['key_description'];
    }
    public withOrigin(origin: CreateKeyRequestBodyOriginEnum | string): CreateKeyRequestBody {
        this['origin'] = origin;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateKeyRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSequence(sequence: string): CreateKeyRequestBody {
        this['sequence'] = sequence;
        return this;
    }
    public withKeystoreId(keystoreId: string): CreateKeyRequestBody {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string  | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId(): string | undefined {
        return this['keystore_id'];
    }
    public withVmId(vmId: string): CreateKeyRequestBody {
        this['vm_id'] = vmId;
        return this;
    }
    public set vmId(vmId: string  | undefined) {
        this['vm_id'] = vmId;
    }
    public get vmId(): string | undefined {
        return this['vm_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateKeyRequestBodyKeySpecEnum {
    AES_256 = 'AES_256',
    SM4 = 'SM4',
    RSA_2048 = 'RSA_2048',
    RSA_3072 = 'RSA_3072',
    RSA_4096 = 'RSA_4096',
    EC_P256 = 'EC_P256',
    EC_P384 = 'EC_P384',
    SECP256K1 = 'SECP256K1',
    SM2 = 'SM2'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateKeyRequestBodyKeyUsageEnum {
    ENCRYPT_DECRYPT = 'ENCRYPT_DECRYPT',
    SIGN_VERIFY = 'SIGN_VERIFY'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateKeyRequestBodyOriginEnum {
    KMS = 'kms',
    EXTERNAL = 'external'
}
