

export class TenantRepoEncryptionSettingRequestDto {
    private 'tenant_id'?: string;
    private 'encryption_type'?: string;
    private 'default_encryption_enabled'?: boolean;
    private 'cmk_key_name'?: string;
    private 'cmk_key_id'?: string;
    public constructor() { 
    }
    public withTenantId(tenantId: string): TenantRepoEncryptionSettingRequestDto {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withEncryptionType(encryptionType: string): TenantRepoEncryptionSettingRequestDto {
        this['encryption_type'] = encryptionType;
        return this;
    }
    public set encryptionType(encryptionType: string  | undefined) {
        this['encryption_type'] = encryptionType;
    }
    public get encryptionType(): string | undefined {
        return this['encryption_type'];
    }
    public withDefaultEncryptionEnabled(defaultEncryptionEnabled: boolean): TenantRepoEncryptionSettingRequestDto {
        this['default_encryption_enabled'] = defaultEncryptionEnabled;
        return this;
    }
    public set defaultEncryptionEnabled(defaultEncryptionEnabled: boolean  | undefined) {
        this['default_encryption_enabled'] = defaultEncryptionEnabled;
    }
    public get defaultEncryptionEnabled(): boolean | undefined {
        return this['default_encryption_enabled'];
    }
    public withCmkKeyName(cmkKeyName: string): TenantRepoEncryptionSettingRequestDto {
        this['cmk_key_name'] = cmkKeyName;
        return this;
    }
    public set cmkKeyName(cmkKeyName: string  | undefined) {
        this['cmk_key_name'] = cmkKeyName;
    }
    public get cmkKeyName(): string | undefined {
        return this['cmk_key_name'];
    }
    public withCmkKeyId(cmkKeyId: string): TenantRepoEncryptionSettingRequestDto {
        this['cmk_key_id'] = cmkKeyId;
        return this;
    }
    public set cmkKeyId(cmkKeyId: string  | undefined) {
        this['cmk_key_id'] = cmkKeyId;
    }
    public get cmkKeyId(): string | undefined {
        return this['cmk_key_id'];
    }
}