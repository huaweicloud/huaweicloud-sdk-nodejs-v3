import { BillingCreate } from './BillingCreate';
import { ResourceCreate } from './ResourceCreate';
import { Tag } from './Tag';
import { VaultBindRules } from './VaultBindRules';
import { VaultCreateParameters } from './VaultCreateParameters';


export class VaultOrder {
    public name?: string;
    public billing?: BillingCreate;
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
    public constructor(billing?: BillingCreate, resources?: Array<ResourceCreate>) { 
        this['billing'] = billing;
        this['resources'] = resources;
    }
    public withName(name: string): VaultOrder {
        this['name'] = name;
        return this;
    }
    public withBilling(billing: BillingCreate): VaultOrder {
        this['billing'] = billing;
        return this;
    }
    public withResources(resources: Array<ResourceCreate>): VaultOrder {
        this['resources'] = resources;
        return this;
    }
    public withDescription(description: string): VaultOrder {
        this['description'] = description;
        return this;
    }
    public withBackupPolicyId(backupPolicyId: string): VaultOrder {
        this['backup_policy_id'] = backupPolicyId;
        return this;
    }
    public set backupPolicyId(backupPolicyId: string  | undefined) {
        this['backup_policy_id'] = backupPolicyId;
    }
    public get backupPolicyId(): string | undefined {
        return this['backup_policy_id'];
    }
    public withTags(tags: Array<Tag>): VaultOrder {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): VaultOrder {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAutoBind(autoBind: boolean): VaultOrder {
        this['auto_bind'] = autoBind;
        return this;
    }
    public set autoBind(autoBind: boolean  | undefined) {
        this['auto_bind'] = autoBind;
    }
    public get autoBind(): boolean | undefined {
        return this['auto_bind'];
    }
    public withBindRules(bindRules: VaultBindRules): VaultOrder {
        this['bind_rules'] = bindRules;
        return this;
    }
    public set bindRules(bindRules: VaultBindRules  | undefined) {
        this['bind_rules'] = bindRules;
    }
    public get bindRules(): VaultBindRules | undefined {
        return this['bind_rules'];
    }
    public withThreshold(threshold: number): VaultOrder {
        this['threshold'] = threshold;
        return this;
    }
    public withSmnNotify(smnNotify: boolean): VaultOrder {
        this['smn_notify'] = smnNotify;
        return this;
    }
    public set smnNotify(smnNotify: boolean  | undefined) {
        this['smn_notify'] = smnNotify;
    }
    public get smnNotify(): boolean | undefined {
        return this['smn_notify'];
    }
    public withParameters(parameters: VaultCreateParameters): VaultOrder {
        this['parameters'] = parameters;
        return this;
    }
    public withAutoExpand(autoExpand: boolean): VaultOrder {
        this['auto_expand'] = autoExpand;
        return this;
    }
    public set autoExpand(autoExpand: boolean  | undefined) {
        this['auto_expand'] = autoExpand;
    }
    public get autoExpand(): boolean | undefined {
        return this['auto_expand'];
    }
    public withLocked(locked: boolean): VaultOrder {
        this['locked'] = locked;
        return this;
    }
}