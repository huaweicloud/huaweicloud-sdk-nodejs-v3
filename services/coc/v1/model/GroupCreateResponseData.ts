import { GroupRelationConfiguration } from './GroupRelationConfiguration';
import { GroupUpdateRequestSyncRules } from './GroupUpdateRequestSyncRules';


export class GroupCreateResponseData {
    public id?: string;
    public name?: string;
    public vendor?: string;
    public code?: string;
    private 'domain_id'?: string;
    private 'region_id'?: string;
    private 'component_id'?: string;
    private 'application_id'?: string;
    public path?: string;
    private 'sync_mode'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'sync_rules'?: Array<GroupUpdateRequestSyncRules>;
    private 'related_domain_id'?: string;
    private 'relation_configurations'?: Array<GroupRelationConfiguration>;
    public constructor() { 
    }
    public withId(id: string): GroupCreateResponseData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GroupCreateResponseData {
        this['name'] = name;
        return this;
    }
    public withVendor(vendor: string): GroupCreateResponseData {
        this['vendor'] = vendor;
        return this;
    }
    public withCode(code: string): GroupCreateResponseData {
        this['code'] = code;
        return this;
    }
    public withDomainId(domainId: string): GroupCreateResponseData {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegionId(regionId: string): GroupCreateResponseData {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withComponentId(componentId: string): GroupCreateResponseData {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withApplicationId(applicationId: string): GroupCreateResponseData {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withPath(path: string): GroupCreateResponseData {
        this['path'] = path;
        return this;
    }
    public withSyncMode(syncMode: string): GroupCreateResponseData {
        this['sync_mode'] = syncMode;
        return this;
    }
    public set syncMode(syncMode: string  | undefined) {
        this['sync_mode'] = syncMode;
    }
    public get syncMode(): string | undefined {
        return this['sync_mode'];
    }
    public withCreateTime(createTime: string): GroupCreateResponseData {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): GroupCreateResponseData {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withSyncRules(syncRules: Array<GroupUpdateRequestSyncRules>): GroupCreateResponseData {
        this['sync_rules'] = syncRules;
        return this;
    }
    public set syncRules(syncRules: Array<GroupUpdateRequestSyncRules>  | undefined) {
        this['sync_rules'] = syncRules;
    }
    public get syncRules(): Array<GroupUpdateRequestSyncRules> | undefined {
        return this['sync_rules'];
    }
    public withRelatedDomainId(relatedDomainId: string): GroupCreateResponseData {
        this['related_domain_id'] = relatedDomainId;
        return this;
    }
    public set relatedDomainId(relatedDomainId: string  | undefined) {
        this['related_domain_id'] = relatedDomainId;
    }
    public get relatedDomainId(): string | undefined {
        return this['related_domain_id'];
    }
    public withRelationConfigurations(relationConfigurations: Array<GroupRelationConfiguration>): GroupCreateResponseData {
        this['relation_configurations'] = relationConfigurations;
        return this;
    }
    public set relationConfigurations(relationConfigurations: Array<GroupRelationConfiguration>  | undefined) {
        this['relation_configurations'] = relationConfigurations;
    }
    public get relationConfigurations(): Array<GroupRelationConfiguration> | undefined {
        return this['relation_configurations'];
    }
}