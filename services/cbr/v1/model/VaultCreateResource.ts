import { Billing } from './Billing';
import { CbcOrderResult } from './CbcOrderResult';
import { ResourceResp } from './ResourceResp';
import { Tag } from './Tag';
import { VaultBindRules } from './VaultBindRules';


export class VaultCreateResource {
    public billing?: Billing;
    public description?: string;
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'provider_id'?: string;
    public resources?: Array<ResourceResp>;
    public tags?: Array<Tag>;
    private 'enterprise_project_id'?: string;
    private 'auto_bind'?: boolean;
    private 'bind_rules'?: VaultBindRules;
    private 'user_id'?: string;
    private 'created_at'?: string;
    private 'auto_expand'?: boolean;
    private 'smn_notify'?: boolean;
    public threshold?: number;
    public errText?: string;
    public retCode?: string;
    public orders?: Array<CbcOrderResult>;
    private 'backup_name_prefix'?: string;
    private 'demand_billing'?: boolean;
    private 'cbc_delete_count'?: number;
    public frozen?: boolean;
    private 'sys_lock_source_service'?: string;
    public constructor(billing?: Billing, id?: string, name?: string, projectId?: string, providerId?: string, resources?: Array<ResourceResp>) { 
        this['billing'] = billing;
        this['id'] = id;
        this['name'] = name;
        this['project_id'] = projectId;
        this['provider_id'] = providerId;
        this['resources'] = resources;
    }
    public withBilling(billing: Billing): VaultCreateResource {
        this['billing'] = billing;
        return this;
    }
    public withDescription(description: string): VaultCreateResource {
        this['description'] = description;
        return this;
    }
    public withId(id: string): VaultCreateResource {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VaultCreateResource {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): VaultCreateResource {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProviderId(providerId: string): VaultCreateResource {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withResources(resources: Array<ResourceResp>): VaultCreateResource {
        this['resources'] = resources;
        return this;
    }
    public withTags(tags: Array<Tag>): VaultCreateResource {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): VaultCreateResource {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAutoBind(autoBind: boolean): VaultCreateResource {
        this['auto_bind'] = autoBind;
        return this;
    }
    public set autoBind(autoBind: boolean  | undefined) {
        this['auto_bind'] = autoBind;
    }
    public get autoBind(): boolean | undefined {
        return this['auto_bind'];
    }
    public withBindRules(bindRules: VaultBindRules): VaultCreateResource {
        this['bind_rules'] = bindRules;
        return this;
    }
    public set bindRules(bindRules: VaultBindRules  | undefined) {
        this['bind_rules'] = bindRules;
    }
    public get bindRules(): VaultBindRules | undefined {
        return this['bind_rules'];
    }
    public withUserId(userId: string): VaultCreateResource {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withCreatedAt(createdAt: string): VaultCreateResource {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withAutoExpand(autoExpand: boolean): VaultCreateResource {
        this['auto_expand'] = autoExpand;
        return this;
    }
    public set autoExpand(autoExpand: boolean  | undefined) {
        this['auto_expand'] = autoExpand;
    }
    public get autoExpand(): boolean | undefined {
        return this['auto_expand'];
    }
    public withSmnNotify(smnNotify: boolean): VaultCreateResource {
        this['smn_notify'] = smnNotify;
        return this;
    }
    public set smnNotify(smnNotify: boolean  | undefined) {
        this['smn_notify'] = smnNotify;
    }
    public get smnNotify(): boolean | undefined {
        return this['smn_notify'];
    }
    public withThreshold(threshold: number): VaultCreateResource {
        this['threshold'] = threshold;
        return this;
    }
    public withErrText(errText: string): VaultCreateResource {
        this['errText'] = errText;
        return this;
    }
    public withRetCode(retCode: string): VaultCreateResource {
        this['retCode'] = retCode;
        return this;
    }
    public withOrders(orders: Array<CbcOrderResult>): VaultCreateResource {
        this['orders'] = orders;
        return this;
    }
    public withBackupNamePrefix(backupNamePrefix: string): VaultCreateResource {
        this['backup_name_prefix'] = backupNamePrefix;
        return this;
    }
    public set backupNamePrefix(backupNamePrefix: string  | undefined) {
        this['backup_name_prefix'] = backupNamePrefix;
    }
    public get backupNamePrefix(): string | undefined {
        return this['backup_name_prefix'];
    }
    public withDemandBilling(demandBilling: boolean): VaultCreateResource {
        this['demand_billing'] = demandBilling;
        return this;
    }
    public set demandBilling(demandBilling: boolean  | undefined) {
        this['demand_billing'] = demandBilling;
    }
    public get demandBilling(): boolean | undefined {
        return this['demand_billing'];
    }
    public withCbcDeleteCount(cbcDeleteCount: number): VaultCreateResource {
        this['cbc_delete_count'] = cbcDeleteCount;
        return this;
    }
    public set cbcDeleteCount(cbcDeleteCount: number  | undefined) {
        this['cbc_delete_count'] = cbcDeleteCount;
    }
    public get cbcDeleteCount(): number | undefined {
        return this['cbc_delete_count'];
    }
    public withFrozen(frozen: boolean): VaultCreateResource {
        this['frozen'] = frozen;
        return this;
    }
    public withSysLockSourceService(sysLockSourceService: string): VaultCreateResource {
        this['sys_lock_source_service'] = sysLockSourceService;
        return this;
    }
    public set sysLockSourceService(sysLockSourceService: string  | undefined) {
        this['sys_lock_source_service'] = sysLockSourceService;
    }
    public get sysLockSourceService(): string | undefined {
        return this['sys_lock_source_service'];
    }
}