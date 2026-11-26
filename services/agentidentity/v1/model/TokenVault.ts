import { KmsConfiguration } from './KmsConfiguration';
import { PolicyEngineConfiguration } from './PolicyEngineConfiguration';
import { Tag } from './Tag';


export class TokenVault {
    private 'token_vault_id'?: string;
    public urn?: string;
    private 'kms_configuration'?: KmsConfiguration;
    private 'policy_engine_configuration'?: PolicyEngineConfiguration;
    private 'updated_at'?: Date;
    public tags?: Array<Tag>;
    public constructor(tokenVaultId?: string, urn?: string, kmsConfiguration?: KmsConfiguration, updatedAt?: Date) { 
        this['token_vault_id'] = tokenVaultId;
        this['urn'] = urn;
        this['kms_configuration'] = kmsConfiguration;
        this['updated_at'] = updatedAt;
    }
    public withTokenVaultId(tokenVaultId: string): TokenVault {
        this['token_vault_id'] = tokenVaultId;
        return this;
    }
    public set tokenVaultId(tokenVaultId: string  | undefined) {
        this['token_vault_id'] = tokenVaultId;
    }
    public get tokenVaultId(): string | undefined {
        return this['token_vault_id'];
    }
    public withUrn(urn: string): TokenVault {
        this['urn'] = urn;
        return this;
    }
    public withKmsConfiguration(kmsConfiguration: KmsConfiguration): TokenVault {
        this['kms_configuration'] = kmsConfiguration;
        return this;
    }
    public set kmsConfiguration(kmsConfiguration: KmsConfiguration  | undefined) {
        this['kms_configuration'] = kmsConfiguration;
    }
    public get kmsConfiguration(): KmsConfiguration | undefined {
        return this['kms_configuration'];
    }
    public withPolicyEngineConfiguration(policyEngineConfiguration: PolicyEngineConfiguration): TokenVault {
        this['policy_engine_configuration'] = policyEngineConfiguration;
        return this;
    }
    public set policyEngineConfiguration(policyEngineConfiguration: PolicyEngineConfiguration  | undefined) {
        this['policy_engine_configuration'] = policyEngineConfiguration;
    }
    public get policyEngineConfiguration(): PolicyEngineConfiguration | undefined {
        return this['policy_engine_configuration'];
    }
    public withUpdatedAt(updatedAt: Date): TokenVault {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withTags(tags: Array<Tag>): TokenVault {
        this['tags'] = tags;
        return this;
    }
}