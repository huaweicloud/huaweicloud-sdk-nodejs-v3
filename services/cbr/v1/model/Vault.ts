import { Billing } from './Billing';
import { ResourceResp } from './ResourceResp';
import { Tag } from './Tag';
import { VaultBindRules } from './VaultBindRules';


export class Vault {
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
    public constructor(billing?: Billing, id?: string, name?: string, projectId?: string, providerId?: string, resources?: Array<ResourceResp>) { 
        this['billing'] = billing;
        this['id'] = id;
        this['name'] = name;
        this['project_id'] = projectId;
        this['provider_id'] = providerId;
        this['resources'] = resources;
    }
    public withBilling(billing: Billing): Vault {
        this['billing'] = billing;
        return this;
    }
    public withDescription(description: string): Vault {
        this['description'] = description;
        return this;
    }
    public withId(id: string): Vault {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Vault {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): Vault {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProviderId(providerId: string): Vault {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withResources(resources: Array<ResourceResp>): Vault {
        this['resources'] = resources;
        return this;
    }
    public withTags(tags: Array<Tag>): Vault {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Vault {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAutoBind(autoBind: boolean): Vault {
        this['auto_bind'] = autoBind;
        return this;
    }
    public set autoBind(autoBind: boolean  | undefined) {
        this['auto_bind'] = autoBind;
    }
    public get autoBind(): boolean | undefined {
        return this['auto_bind'];
    }
    public withBindRules(bindRules: VaultBindRules): Vault {
        this['bind_rules'] = bindRules;
        return this;
    }
    public set bindRules(bindRules: VaultBindRules  | undefined) {
        this['bind_rules'] = bindRules;
    }
    public get bindRules(): VaultBindRules | undefined {
        return this['bind_rules'];
    }
    public withUserId(userId: string): Vault {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withCreatedAt(createdAt: string): Vault {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withAutoExpand(autoExpand: boolean): Vault {
        this['auto_expand'] = autoExpand;
        return this;
    }
    public set autoExpand(autoExpand: boolean  | undefined) {
        this['auto_expand'] = autoExpand;
    }
    public get autoExpand(): boolean | undefined {
        return this['auto_expand'];
    }
    public withSmnNotify(smnNotify: boolean): Vault {
        this['smn_notify'] = smnNotify;
        return this;
    }
    public set smnNotify(smnNotify: boolean  | undefined) {
        this['smn_notify'] = smnNotify;
    }
    public get smnNotify(): boolean | undefined {
        return this['smn_notify'];
    }
    public withThreshold(threshold: number): Vault {
        this['threshold'] = threshold;
        return this;
    }
}