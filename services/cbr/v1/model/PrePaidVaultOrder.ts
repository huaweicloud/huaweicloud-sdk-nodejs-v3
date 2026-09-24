import { DataEncryption } from './DataEncryption';
import { PrePaidBillingCreate } from './PrePaidBillingCreate';
import { ResourceCreate } from './ResourceCreate';
import { Tag } from './Tag';
import { VaultBindRules } from './VaultBindRules';
import { VaultCreateParameters } from './VaultCreateParameters';


export class PrePaidVaultOrder {
    public name?: string;
    public billing?: PrePaidBillingCreate;
    public resources?: Array<ResourceCreate>;
    public description?: string;
    private 'backup_policy_id'?: string;
    public tags?: Array<Tag>;
    private 'enterprise_project_id'?: string;
    private 'auto_bind'?: boolean;
    private 'bind_rules'?: VaultBindRules;
    public threshold?: number;
    private 'smn_notify'?: boolean;
    public parameters?: VaultCreateParameters;
    private 'auto_expand'?: boolean;
    public locked?: boolean;
    private 'cross_account'?: boolean;
    private 'data_encryption'?: DataEncryption;
    public constructor(billing?: PrePaidBillingCreate, resources?: Array<ResourceCreate>) { 
        this['billing'] = billing;
        this['resources'] = resources;
    }
    public withName(name: string): PrePaidVaultOrder {
        this['name'] = name;
        return this;
    }
    public withBilling(billing: PrePaidBillingCreate): PrePaidVaultOrder {
        this['billing'] = billing;
        return this;
    }
    public withResources(resources: Array<ResourceCreate>): PrePaidVaultOrder {
        this['resources'] = resources;
        return this;
    }
    public withDescription(description: string): PrePaidVaultOrder {
        this['description'] = description;
        return this;
    }
    public withBackupPolicyId(backupPolicyId: string): PrePaidVaultOrder {
        this['backup_policy_id'] = backupPolicyId;
        return this;
    }
    public set backupPolicyId(backupPolicyId: string  | undefined) {
        this['backup_policy_id'] = backupPolicyId;
    }
    public get backupPolicyId(): string | undefined {
        return this['backup_policy_id'];
    }
    public withTags(tags: Array<Tag>): PrePaidVaultOrder {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PrePaidVaultOrder {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAutoBind(autoBind: boolean): PrePaidVaultOrder {
        this['auto_bind'] = autoBind;
        return this;
    }
    public set autoBind(autoBind: boolean  | undefined) {
        this['auto_bind'] = autoBind;
    }
    public get autoBind(): boolean | undefined {
        return this['auto_bind'];
    }
    public withBindRules(bindRules: VaultBindRules): PrePaidVaultOrder {
        this['bind_rules'] = bindRules;
        return this;
    }
    public set bindRules(bindRules: VaultBindRules  | undefined) {
        this['bind_rules'] = bindRules;
    }
    public get bindRules(): VaultBindRules | undefined {
        return this['bind_rules'];
    }
    public withThreshold(threshold: number): PrePaidVaultOrder {
        this['threshold'] = threshold;
        return this;
    }
    public withSmnNotify(smnNotify: boolean): PrePaidVaultOrder {
        this['smn_notify'] = smnNotify;
        return this;
    }
    public set smnNotify(smnNotify: boolean  | undefined) {
        this['smn_notify'] = smnNotify;
    }
    public get smnNotify(): boolean | undefined {
        return this['smn_notify'];
    }
    public withParameters(parameters: VaultCreateParameters): PrePaidVaultOrder {
        this['parameters'] = parameters;
        return this;
    }
    public withAutoExpand(autoExpand: boolean): PrePaidVaultOrder {
        this['auto_expand'] = autoExpand;
        return this;
    }
    public set autoExpand(autoExpand: boolean  | undefined) {
        this['auto_expand'] = autoExpand;
    }
    public get autoExpand(): boolean | undefined {
        return this['auto_expand'];
    }
    public withLocked(locked: boolean): PrePaidVaultOrder {
        this['locked'] = locked;
        return this;
    }
    public withCrossAccount(crossAccount: boolean): PrePaidVaultOrder {
        this['cross_account'] = crossAccount;
        return this;
    }
    public set crossAccount(crossAccount: boolean  | undefined) {
        this['cross_account'] = crossAccount;
    }
    public get crossAccount(): boolean | undefined {
        return this['cross_account'];
    }
    public withDataEncryption(dataEncryption: DataEncryption): PrePaidVaultOrder {
        this['data_encryption'] = dataEncryption;
        return this;
    }
    public set dataEncryption(dataEncryption: DataEncryption  | undefined) {
        this['data_encryption'] = dataEncryption;
    }
    public get dataEncryption(): DataEncryption | undefined {
        return this['data_encryption'];
    }
}