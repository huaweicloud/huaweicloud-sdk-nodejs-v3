import { BillingCreate } from './BillingCreate';
import { ResourceCreate } from './ResourceCreate';
import { Tag } from './Tag';
import { VaultBindRules } from './VaultBindRules';


export class VaultCreate {
    private 'backup_policy_id'?: string | undefined;
    public billing: BillingCreate;
    public description?: string;
    public name: string;
    public resources: Array<ResourceCreate>;
    public tags?: Array<Tag>;
    private 'enterprise_project_id'?: string | undefined;
    private 'auto_bind'?: boolean | undefined;
    private 'bind_rules'?: VaultBindRules | undefined;
    private 'auto_expand'?: boolean | undefined;
    public constructor(billing?: any, name?: any, resources?: any) { 
        this['billing'] = billing;
        this['name'] = name;
        this['resources'] = resources;
    }
    public withBackupPolicyId(backupPolicyId: string): VaultCreate {
        this['backup_policy_id'] = backupPolicyId;
        return this;
    }
    public set backupPolicyId(backupPolicyId: string | undefined) {
        this['backup_policy_id'] = backupPolicyId;
    }
    public get backupPolicyId() {
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
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withAutoBind(autoBind: boolean): VaultCreate {
        this['auto_bind'] = autoBind;
        return this;
    }
    public set autoBind(autoBind: boolean | undefined) {
        this['auto_bind'] = autoBind;
    }
    public get autoBind() {
        return this['auto_bind'];
    }
    public withBindRules(bindRules: VaultBindRules): VaultCreate {
        this['bind_rules'] = bindRules;
        return this;
    }
    public set bindRules(bindRules: VaultBindRules | undefined) {
        this['bind_rules'] = bindRules;
    }
    public get bindRules() {
        return this['bind_rules'];
    }
    public withAutoExpand(autoExpand: boolean): VaultCreate {
        this['auto_expand'] = autoExpand;
        return this;
    }
    public set autoExpand(autoExpand: boolean | undefined) {
        this['auto_expand'] = autoExpand;
    }
    public get autoExpand() {
        return this['auto_expand'];
    }
}