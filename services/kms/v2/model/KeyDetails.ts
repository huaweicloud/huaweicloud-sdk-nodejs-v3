

export class KeyDetails {
    private 'key_id'?: string;
    private 'domain_id'?: string;
    private 'key_alias'?: string;
    public realm?: string;
    private 'key_spec'?: KeyDetailsKeySpecEnum | string;
    private 'key_usage'?: KeyDetailsKeyUsageEnum | string;
    private 'key_description'?: string;
    private 'creation_date'?: string;
    private 'scheduled_deletion_date'?: string;
    private 'key_state'?: string;
    private 'default_key_flag'?: string;
    private 'key_type'?: string;
    private 'expiration_time'?: string;
    public origin?: KeyDetailsOriginEnum | string;
    private 'key_rotation_enabled'?: string;
    private 'sys_enterprise_project_id'?: string;
    private 'keystore_id'?: string;
    public constructor() { 
    }
    public withKeyId(keyId: string): KeyDetails {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withDomainId(domainId: string): KeyDetails {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withKeyAlias(keyAlias: string): KeyDetails {
        this['key_alias'] = keyAlias;
        return this;
    }
    public set keyAlias(keyAlias: string  | undefined) {
        this['key_alias'] = keyAlias;
    }
    public get keyAlias(): string | undefined {
        return this['key_alias'];
    }
    public withRealm(realm: string): KeyDetails {
        this['realm'] = realm;
        return this;
    }
    public withKeySpec(keySpec: KeyDetailsKeySpecEnum | string): KeyDetails {
        this['key_spec'] = keySpec;
        return this;
    }
    public set keySpec(keySpec: KeyDetailsKeySpecEnum | string  | undefined) {
        this['key_spec'] = keySpec;
    }
    public get keySpec(): KeyDetailsKeySpecEnum | string | undefined {
        return this['key_spec'];
    }
    public withKeyUsage(keyUsage: KeyDetailsKeyUsageEnum | string): KeyDetails {
        this['key_usage'] = keyUsage;
        return this;
    }
    public set keyUsage(keyUsage: KeyDetailsKeyUsageEnum | string  | undefined) {
        this['key_usage'] = keyUsage;
    }
    public get keyUsage(): KeyDetailsKeyUsageEnum | string | undefined {
        return this['key_usage'];
    }
    public withKeyDescription(keyDescription: string): KeyDetails {
        this['key_description'] = keyDescription;
        return this;
    }
    public set keyDescription(keyDescription: string  | undefined) {
        this['key_description'] = keyDescription;
    }
    public get keyDescription(): string | undefined {
        return this['key_description'];
    }
    public withCreationDate(creationDate: string): KeyDetails {
        this['creation_date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: string  | undefined) {
        this['creation_date'] = creationDate;
    }
    public get creationDate(): string | undefined {
        return this['creation_date'];
    }
    public withScheduledDeletionDate(scheduledDeletionDate: string): KeyDetails {
        this['scheduled_deletion_date'] = scheduledDeletionDate;
        return this;
    }
    public set scheduledDeletionDate(scheduledDeletionDate: string  | undefined) {
        this['scheduled_deletion_date'] = scheduledDeletionDate;
    }
    public get scheduledDeletionDate(): string | undefined {
        return this['scheduled_deletion_date'];
    }
    public withKeyState(keyState: string): KeyDetails {
        this['key_state'] = keyState;
        return this;
    }
    public set keyState(keyState: string  | undefined) {
        this['key_state'] = keyState;
    }
    public get keyState(): string | undefined {
        return this['key_state'];
    }
    public withDefaultKeyFlag(defaultKeyFlag: string): KeyDetails {
        this['default_key_flag'] = defaultKeyFlag;
        return this;
    }
    public set defaultKeyFlag(defaultKeyFlag: string  | undefined) {
        this['default_key_flag'] = defaultKeyFlag;
    }
    public get defaultKeyFlag(): string | undefined {
        return this['default_key_flag'];
    }
    public withKeyType(keyType: string): KeyDetails {
        this['key_type'] = keyType;
        return this;
    }
    public set keyType(keyType: string  | undefined) {
        this['key_type'] = keyType;
    }
    public get keyType(): string | undefined {
        return this['key_type'];
    }
    public withExpirationTime(expirationTime: string): KeyDetails {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: string  | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime(): string | undefined {
        return this['expiration_time'];
    }
    public withOrigin(origin: KeyDetailsOriginEnum | string): KeyDetails {
        this['origin'] = origin;
        return this;
    }
    public withKeyRotationEnabled(keyRotationEnabled: string): KeyDetails {
        this['key_rotation_enabled'] = keyRotationEnabled;
        return this;
    }
    public set keyRotationEnabled(keyRotationEnabled: string  | undefined) {
        this['key_rotation_enabled'] = keyRotationEnabled;
    }
    public get keyRotationEnabled(): string | undefined {
        return this['key_rotation_enabled'];
    }
    public withSysEnterpriseProjectId(sysEnterpriseProjectId: string): KeyDetails {
        this['sys_enterprise_project_id'] = sysEnterpriseProjectId;
        return this;
    }
    public set sysEnterpriseProjectId(sysEnterpriseProjectId: string  | undefined) {
        this['sys_enterprise_project_id'] = sysEnterpriseProjectId;
    }
    public get sysEnterpriseProjectId(): string | undefined {
        return this['sys_enterprise_project_id'];
    }
    public withKeystoreId(keystoreId: string): KeyDetails {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string  | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId(): string | undefined {
        return this['keystore_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KeyDetailsKeySpecEnum {
    AES_256 = 'AES_256',
    SM4 = 'SM4',
    RSA_2048 = 'RSA_2048',
    RSA_3072 = 'RSA_3072',
    RSA_4096 = 'RSA_4096',
    EC_P256 = 'EC_P256',
    EC_P384 = 'EC_P384',
    SM2 = 'SM2'
}
/**
    * @export
    * @enum {string}
    */
export enum KeyDetailsKeyUsageEnum {
    ENCRYPT_DECRYPT = 'ENCRYPT_DECRYPT',
    SIGN_VERIFY = 'SIGN_VERIFY'
}
/**
    * @export
    * @enum {string}
    */
export enum KeyDetailsOriginEnum {
    KMS = 'kms',
    EXTERNAL = 'external'
}
