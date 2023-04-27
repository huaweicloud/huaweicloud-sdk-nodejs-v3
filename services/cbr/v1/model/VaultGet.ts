import { Billing } from './Billing';
import { ResourceResp } from './ResourceResp';
import { Tag } from './Tag';
import { Vault } from './Vault';
import { VaultBindRules } from './VaultBindRules';


export class VaultGet {
    public billing: Billing;
    public description?: string;
    public id: string;
    public name: string;
    private 'project_id': string | undefined;
    private 'provider_id': string | undefined;
    public resources: Array<ResourceResp>;
    public tags?: Array<Tag>;
    private 'enterprise_project_id'?: string | undefined;
    private 'auto_bind'?: boolean | undefined;
    private 'bind_rules'?: VaultBindRules | undefined;
    private 'user_id'?: string | undefined;
    private 'created_at'?: string | undefined;
    private 'auto_expand'?: boolean | undefined;
    private 'smn_notify'?: boolean | undefined;
    public threshold?: number;
    private 'updated_at': string | undefined;
    public version?: string;
    public constructor(billing?: any, id?: any, name?: any, projectId?: any, providerId?: any, resources?: any, updatedAt?: any) { 
        this['billing'] = billing;
        this['id'] = id;
        this['name'] = name;
        this['project_id'] = projectId;
        this['provider_id'] = providerId;
        this['resources'] = resources;
        this['updated_at'] = updatedAt;
    }
    public withBilling(billing: Billing): VaultGet {
        this['billing'] = billing;
        return this;
    }
    public withDescription(description: string): VaultGet {
        this['description'] = description;
        return this;
    }
    public withId(id: string): VaultGet {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VaultGet {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): VaultGet {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withProviderId(providerId: string): VaultGet {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId() {
        return this['provider_id'];
    }
    public withResources(resources: Array<ResourceResp>): VaultGet {
        this['resources'] = resources;
        return this;
    }
    public withTags(tags: Array<Tag>): VaultGet {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): VaultGet {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withAutoBind(autoBind: boolean): VaultGet {
        this['auto_bind'] = autoBind;
        return this;
    }
    public set autoBind(autoBind: boolean | undefined) {
        this['auto_bind'] = autoBind;
    }
    public get autoBind() {
        return this['auto_bind'];
    }
    public withBindRules(bindRules: VaultBindRules): VaultGet {
        this['bind_rules'] = bindRules;
        return this;
    }
    public set bindRules(bindRules: VaultBindRules | undefined) {
        this['bind_rules'] = bindRules;
    }
    public get bindRules() {
        return this['bind_rules'];
    }
    public withUserId(userId: string): VaultGet {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withCreatedAt(createdAt: string): VaultGet {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withAutoExpand(autoExpand: boolean): VaultGet {
        this['auto_expand'] = autoExpand;
        return this;
    }
    public set autoExpand(autoExpand: boolean | undefined) {
        this['auto_expand'] = autoExpand;
    }
    public get autoExpand() {
        return this['auto_expand'];
    }
    public withSmnNotify(smnNotify: boolean): VaultGet {
        this['smn_notify'] = smnNotify;
        return this;
    }
    public set smnNotify(smnNotify: boolean | undefined) {
        this['smn_notify'] = smnNotify;
    }
    public get smnNotify() {
        return this['smn_notify'];
    }
    public withThreshold(threshold: number): VaultGet {
        this['threshold'] = threshold;
        return this;
    }
    public withUpdatedAt(updatedAt: string): VaultGet {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withVersion(version: string): VaultGet {
        this['version'] = version;
        return this;
    }
}