

export class Metadata {
    private 'crypt_key_id'?: string;
    private 'dedicated_flavor'?: string;
    private 'dedicated_storage_id'?: string;
    private 'expand_type'?: string;
    private 'hpc_bw'?: string;
    private 'auto_create_security_group_rules'?: MetadataAutoCreateSecurityGroupRulesEnum | string;
    private 'vault_id'?: string;
    public constructor() { 
    }
    public withCryptKeyId(cryptKeyId: string): Metadata {
        this['crypt_key_id'] = cryptKeyId;
        return this;
    }
    public set cryptKeyId(cryptKeyId: string  | undefined) {
        this['crypt_key_id'] = cryptKeyId;
    }
    public get cryptKeyId(): string | undefined {
        return this['crypt_key_id'];
    }
    public withDedicatedFlavor(dedicatedFlavor: string): Metadata {
        this['dedicated_flavor'] = dedicatedFlavor;
        return this;
    }
    public set dedicatedFlavor(dedicatedFlavor: string  | undefined) {
        this['dedicated_flavor'] = dedicatedFlavor;
    }
    public get dedicatedFlavor(): string | undefined {
        return this['dedicated_flavor'];
    }
    public withDedicatedStorageId(dedicatedStorageId: string): Metadata {
        this['dedicated_storage_id'] = dedicatedStorageId;
        return this;
    }
    public set dedicatedStorageId(dedicatedStorageId: string  | undefined) {
        this['dedicated_storage_id'] = dedicatedStorageId;
    }
    public get dedicatedStorageId(): string | undefined {
        return this['dedicated_storage_id'];
    }
    public withExpandType(expandType: string): Metadata {
        this['expand_type'] = expandType;
        return this;
    }
    public set expandType(expandType: string  | undefined) {
        this['expand_type'] = expandType;
    }
    public get expandType(): string | undefined {
        return this['expand_type'];
    }
    public withHpcBw(hpcBw: string): Metadata {
        this['hpc_bw'] = hpcBw;
        return this;
    }
    public set hpcBw(hpcBw: string  | undefined) {
        this['hpc_bw'] = hpcBw;
    }
    public get hpcBw(): string | undefined {
        return this['hpc_bw'];
    }
    public withAutoCreateSecurityGroupRules(autoCreateSecurityGroupRules: MetadataAutoCreateSecurityGroupRulesEnum | string): Metadata {
        this['auto_create_security_group_rules'] = autoCreateSecurityGroupRules;
        return this;
    }
    public set autoCreateSecurityGroupRules(autoCreateSecurityGroupRules: MetadataAutoCreateSecurityGroupRulesEnum | string  | undefined) {
        this['auto_create_security_group_rules'] = autoCreateSecurityGroupRules;
    }
    public get autoCreateSecurityGroupRules(): MetadataAutoCreateSecurityGroupRulesEnum | string | undefined {
        return this['auto_create_security_group_rules'];
    }
    public withVaultId(vaultId: string): Metadata {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MetadataAutoCreateSecurityGroupRulesEnum {
    TRUE = 'true',
    FALSE = 'false'
}
