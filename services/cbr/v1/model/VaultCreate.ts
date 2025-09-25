import { BillingCreate } from './BillingCreate';
import { ResourceCreate } from './ResourceCreate';
import { Tag } from './Tag';
import { VaultBindRules } from './VaultBindRules';


export class VaultCreate {
    private 'backup_policy_id'?: string;
    public billing?: BillingCreate;
    public description?: string;
    public name?: string;
    public resources?: Array<ResourceCreate>;
    public tags?: Array<Tag>;
    private 'enterprise_project_id'?: string;
    private 'auto_bind'?: boolean;
    private 'bind_rules'?: VaultBindRules;
    private 'auto_expand'?: boolean;
    public threshold?: number;
    private 'smn_notify'?: boolean;
    private 'backup_name_prefix'?: string;
    private 'demand_billing'?: boolean;
    private 'sys_lock_source_service'?: string;
    public locked?: boolean;
    private 'availability_zone'?: string;
    public constructor(billing?: BillingCreate, name?: string, resources?: Array<ResourceCreate>) { 
        this['billing'] = billing;
        this['name'] = name;
        this['resources'] = resources;
    }
    public withBackupPolicyId(backupPolicyId: string): VaultCreate {
        this['backup_policy_id'] = backupPolicyId;
        return this;
    }
    public set backupPolicyId(backupPolicyId: string  | undefined) {
        this['backup_policy_id'] = backupPolicyId;
    }
    public get backupPolicyId(): string | undefined {
        return this['backup_policy_id'];
    }
    public withBilling(billing: BillingCreate): VaultCreate {
        this['billing'] = billing;
        return this;
    }
    public withDescription(description: string): VaultCreate {
        this['description'] = description;
        return this;
    }
    public withName(name: string): VaultCreate {
        this['name'] = name;
        return this;
    }
    public withResources(resources: Array<ResourceCreate>): VaultCreate {
        this['resources'] = resources;
        return this;
    }
    public withTags(tags: Array<Tag>): VaultCreate {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): VaultCreate {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAutoBind(autoBind: boolean): VaultCreate {
        this['auto_bind'] = autoBind;
        return this;
    }
    public set autoBind(autoBind: boolean  | undefined) {
        this['auto_bind'] = autoBind;
    }
    public get autoBind(): boolean | undefined {
        return this['auto_bind'];
    }
    public withBindRules(bindRules: VaultBindRules): VaultCreate {
        this['bind_rules'] = bindRules;
        return this;
    }
    public set bindRules(bindRules: VaultBindRules  | undefined) {
        this['bind_rules'] = bindRules;
    }
    public get bindRules(): VaultBindRules | undefined {
        return this['bind_rules'];
    }
    public withAutoExpand(autoExpand: boolean): VaultCreate {
        this['auto_expand'] = autoExpand;
        return this;
    }
    public set autoExpand(autoExpand: boolean  | undefined) {
        this['auto_expand'] = autoExpand;
    }
    public get autoExpand(): boolean | undefined {
        return this['auto_expand'];
    }
    public withThreshold(threshold: number): VaultCreate {
        this['threshold'] = threshold;
        return this;
    }
    public withSmnNotify(smnNotify: boolean): VaultCreate {
        this['smn_notify'] = smnNotify;
        return this;
    }
    public set smnNotify(smnNotify: boolean  | undefined) {
        this['smn_notify'] = smnNotify;
    }
    public get smnNotify(): boolean | undefined {
        return this['smn_notify'];
    }
    public withBackupNamePrefix(backupNamePrefix: string): VaultCreate {
        this['backup_name_prefix'] = backupNamePrefix;
        return this;
    }
    public set backupNamePrefix(backupNamePrefix: string  | undefined) {
        this['backup_name_prefix'] = backupNamePrefix;
    }
    public get backupNamePrefix(): string | undefined {
        return this['backup_name_prefix'];
    }
    public withDemandBilling(demandBilling: boolean): VaultCreate {
        this['demand_billing'] = demandBilling;
        return this;
    }
    public set demandBilling(demandBilling: boolean  | undefined) {
        this['demand_billing'] = demandBilling;
    }
    public get demandBilling(): boolean | undefined {
        return this['demand_billing'];
    }
    public withSysLockSourceService(sysLockSourceService: string): VaultCreate {
        this['sys_lock_source_service'] = sysLockSourceService;
        return this;
    }
    public set sysLockSourceService(sysLockSourceService: string  | undefined) {
        this['sys_lock_source_service'] = sysLockSourceService;
    }
    public get sysLockSourceService(): string | undefined {
        return this['sys_lock_source_service'];
    }
    public withLocked(locked: boolean): VaultCreate {
        this['locked'] = locked;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): VaultCreate {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
}