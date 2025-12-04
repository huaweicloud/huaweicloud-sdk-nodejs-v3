import { GroupRelationConfiguration } from './GroupRelationConfiguration';
import { GroupUpdateRequestSyncRules } from './GroupUpdateRequestSyncRules';


export class GroupCreateRequest {
    public name?: string;
    private 'component_id'?: string;
    public vendor?: string;
    private 'region_id'?: string;
    private 'application_id'?: string;
    private 'sync_mode'?: string;
    private 'sync_rules'?: Array<GroupUpdateRequestSyncRules>;
    private 'relation_configurations'?: Array<GroupRelationConfiguration>;
    private 'related_domain_id'?: string;
    public constructor(name?: string, componentId?: string, regionId?: string, syncMode?: string) { 
        this['name'] = name;
        this['component_id'] = componentId;
        this['region_id'] = regionId;
        this['sync_mode'] = syncMode;
    }
    public withName(name: string): GroupCreateRequest {
        this['name'] = name;
        return this;
    }
    public withComponentId(componentId: string): GroupCreateRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withVendor(vendor: string): GroupCreateRequest {
        this['vendor'] = vendor;
        return this;
    }
    public withRegionId(regionId: string): GroupCreateRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withApplicationId(applicationId: string): GroupCreateRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withSyncMode(syncMode: string): GroupCreateRequest {
        this['sync_mode'] = syncMode;
        return this;
    }
    public set syncMode(syncMode: string  | undefined) {
        this['sync_mode'] = syncMode;
    }
    public get syncMode(): string | undefined {
        return this['sync_mode'];
    }
    public withSyncRules(syncRules: Array<GroupUpdateRequestSyncRules>): GroupCreateRequest {
        this['sync_rules'] = syncRules;
        return this;
    }
    public set syncRules(syncRules: Array<GroupUpdateRequestSyncRules>  | undefined) {
        this['sync_rules'] = syncRules;
    }
    public get syncRules(): Array<GroupUpdateRequestSyncRules> | undefined {
        return this['sync_rules'];
    }
    public withRelationConfigurations(relationConfigurations: Array<GroupRelationConfiguration>): GroupCreateRequest {
        this['relation_configurations'] = relationConfigurations;
        return this;
    }
    public set relationConfigurations(relationConfigurations: Array<GroupRelationConfiguration>  | undefined) {
        this['relation_configurations'] = relationConfigurations;
    }
    public get relationConfigurations(): Array<GroupRelationConfiguration> | undefined {
        return this['relation_configurations'];
    }
    public withRelatedDomainId(relatedDomainId: string): GroupCreateRequest {
        this['related_domain_id'] = relatedDomainId;
        return this;
    }
    public set relatedDomainId(relatedDomainId: string  | undefined) {
        this['related_domain_id'] = relatedDomainId;
    }
    public get relatedDomainId(): string | undefined {
        return this['related_domain_id'];
    }
}