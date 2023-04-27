

export class KeyDetails {
    private 'key_id'?: string | undefined;
    private 'domain_id'?: string | undefined;
    private 'key_alias'?: string | undefined;
    public realm?: string;
    private 'key_spec'?: KeyDetailsKeySpecEnum | undefined;
    private 'key_usage'?: KeyDetailsKeyUsageEnum | undefined;
    private 'key_description'?: string | undefined;
    private 'creation_date'?: string | undefined;
    private 'scheduled_deletion_date'?: string | undefined;
    private 'key_state'?: string | undefined;
    private 'default_key_flag'?: string | undefined;
    private 'key_type'?: string | undefined;
    private 'expiration_time'?: string | undefined;
    public origin?: KeyDetailsOriginEnum;
    private 'key_rotation_enabled'?: string | undefined;
    private 'sys_enterprise_project_id'?: string | undefined;
    private 'keystore_id'?: string | undefined;
    private 'key_label'?: string | undefined;
    private 'partition_type'?: string | undefined;
    public constructor() { 
    }
    public withKeyId(keyId: string): KeyDetails {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withDomainId(domainId: string): KeyDetails {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withKeyAlias(keyAlias: string): KeyDetails {
        this['key_alias'] = keyAlias;
        return this;
    }
    public set keyAlias(keyAlias: string | undefined) {
        this['key_alias'] = keyAlias;
    }
    public get keyAlias() {
        return this['key_alias'];
    }
    public withRealm(realm: string): KeyDetails {
        this['realm'] = realm;
        return this;
    }
    public withKeySpec(keySpec: KeyDetailsKeySpecEnum): KeyDetails {
        this['key_spec'] = keySpec;
        return this;
    }
    public set keySpec(keySpec: KeyDetailsKeySpecEnum | undefined) {
        this['key_spec'] = keySpec;
    }
    public get keySpec() {
        return this['key_spec'];
    }
    public withKeyUsage(keyUsage: KeyDetailsKeyUsageEnum): KeyDetails {
        this['key_usage'] = keyUsage;
        return this;
    }
    public set keyUsage(keyUsage: KeyDetailsKeyUsageEnum | undefined) {
        this['key_usage'] = keyUsage;
    }
    public get keyUsage() {
        return this['key_usage'];
    }
    public withKeyDescription(keyDescription: string): KeyDetails {
        this['key_description'] = keyDescription;
        return this;
    }
    public set keyDescription(keyDescription: string | undefined) {
        this['key_description'] = keyDescription;
    }
    public get keyDescription() {
        return this['key_description'];
    }
    public withCreationDate(creationDate: string): KeyDetails {
        this['creation_date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: string | undefined) {
        this['creation_date'] = creationDate;
    }
    public get creationDate() {
        return this['creation_date'];
    }
    public withScheduledDeletionDate(scheduledDeletionDate: string): KeyDetails {
        this['scheduled_deletion_date'] = scheduledDeletionDate;
        return this;
    }
    public set scheduledDeletionDate(scheduledDeletionDate: string | undefined) {
        this['scheduled_deletion_date'] = scheduledDeletionDate;
    }
    public get scheduledDeletionDate() {
        return this['scheduled_deletion_date'];
    }
    public withKeyState(keyState: string): KeyDetails {
        this['key_state'] = keyState;
        return this;
    }
    public set keyState(keyState: string | undefined) {
        this['key_state'] = keyState;
    }
    public get keyState() {
        return this['key_state'];
    }
    public withDefaultKeyFlag(defaultKeyFlag: string): KeyDetails {
        this['default_key_flag'] = defaultKeyFlag;
        return this;
    }
    public set defaultKeyFlag(defaultKeyFlag: string | undefined) {
        this['default_key_flag'] = defaultKeyFlag;
    }
    public get defaultKeyFlag() {
        return this['default_key_flag'];
    }
    public withKeyType(keyType: string): KeyDetails {
        this['key_type'] = keyType;
        return this;
    }
    public set keyType(keyType: string | undefined) {
        this['key_type'] = keyType;
    }
    public get keyType() {
        return this['key_type'];
    }
    public withExpirationTime(expirationTime: string): KeyDetails {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: string | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime() {
        return this['expiration_time'];
    }
    public withOrigin(origin: KeyDetailsOriginEnum): KeyDetails {
        this['origin'] = origin;
        return this;
    }
    public withKeyRotationEnabled(keyRotationEnabled: string): KeyDetails {
        this['key_rotation_enabled'] = keyRotationEnabled;
        return this;
    }
    public set keyRotationEnabled(keyRotationEnabled: string | undefined) {
        this['key_rotation_enabled'] = keyRotationEnabled;
    }
    public get keyRotationEnabled() {
        return this['key_rotation_enabled'];
    }
    public withSysEnterpriseProjectId(sysEnterpriseProjectId: string): KeyDetails {
        this['sys_enterprise_project_id'] = sysEnterpriseProjectId;
        return this;
    }
    public set sysEnterpriseProjectId(sysEnterpriseProjectId: string | undefined) {
        this['sys_enterprise_project_id'] = sysEnterpriseProjectId;
    }
    public get sysEnterpriseProjectId() {
        return this['sys_enterprise_project_id'];
    }
    public withKeystoreId(keystoreId: string): KeyDetails {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId() {
        return this['keystore_id'];
    }
    public withKeyLabel(keyLabel: string): KeyDetails {
        this['key_label'] = keyLabel;
        return this;
    }
    public set keyLabel(keyLabel: string | undefined) {
        this['key_label'] = keyLabel;
    }
    public get keyLabel() {
        return this['key_label'];
    }
    public withPartitionType(partitionType: string): KeyDetails {
        this['partition_type'] = partitionType;
        return this;
    }
    public set partitionType(partitionType: string | undefined) {
        this['partition_type'] = partitionType;
    }
    public get partitionType() {
        return this['partition_type'];
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
