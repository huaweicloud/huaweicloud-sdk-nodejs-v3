import { BatchCreateApplicationViewRequestBodySyncRules } from './BatchCreateApplicationViewRequestBodySyncRules';
import { GroupRelationConfiguration } from './GroupRelationConfiguration';


export class BatchCreateApplicationViewRequestBodyGroupList {
    public name?: string;
    private 'region_id'?: string;
    private 'cmdb_resource_id_list'?: Array<string>;
    private 'parent_name'?: string;
    private 'sync_mode'?: BatchCreateApplicationViewRequestBodyGroupListSyncModeEnum | string;
    private 'sync_rules'?: Array<BatchCreateApplicationViewRequestBodySyncRules>;
    private 'application_name'?: string;
    private 'component_name'?: string;
    public vendor?: string;
    private 'relation_configurations'?: Array<GroupRelationConfiguration>;
    private 'related_domain_id'?: string;
    public constructor() { 
    }
    public withName(name: string): BatchCreateApplicationViewRequestBodyGroupList {
        this['name'] = name;
        return this;
    }
    public withRegionId(regionId: string): BatchCreateApplicationViewRequestBodyGroupList {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withCmdbResourceIdList(cmdbResourceIdList: Array<string>): BatchCreateApplicationViewRequestBodyGroupList {
        this['cmdb_resource_id_list'] = cmdbResourceIdList;
        return this;
    }
    public set cmdbResourceIdList(cmdbResourceIdList: Array<string>  | undefined) {
        this['cmdb_resource_id_list'] = cmdbResourceIdList;
    }
    public get cmdbResourceIdList(): Array<string> | undefined {
        return this['cmdb_resource_id_list'];
    }
    public withParentName(parentName: string): BatchCreateApplicationViewRequestBodyGroupList {
        this['parent_name'] = parentName;
        return this;
    }
    public set parentName(parentName: string  | undefined) {
        this['parent_name'] = parentName;
    }
    public get parentName(): string | undefined {
        return this['parent_name'];
    }
    public withSyncMode(syncMode: BatchCreateApplicationViewRequestBodyGroupListSyncModeEnum | string): BatchCreateApplicationViewRequestBodyGroupList {
        this['sync_mode'] = syncMode;
        return this;
    }
    public set syncMode(syncMode: BatchCreateApplicationViewRequestBodyGroupListSyncModeEnum | string  | undefined) {
        this['sync_mode'] = syncMode;
    }
    public get syncMode(): BatchCreateApplicationViewRequestBodyGroupListSyncModeEnum | string | undefined {
        return this['sync_mode'];
    }
    public withSyncRules(syncRules: Array<BatchCreateApplicationViewRequestBodySyncRules>): BatchCreateApplicationViewRequestBodyGroupList {
        this['sync_rules'] = syncRules;
        return this;
    }
    public set syncRules(syncRules: Array<BatchCreateApplicationViewRequestBodySyncRules>  | undefined) {
        this['sync_rules'] = syncRules;
    }
    public get syncRules(): Array<BatchCreateApplicationViewRequestBodySyncRules> | undefined {
        return this['sync_rules'];
    }
    public withApplicationName(applicationName: string): BatchCreateApplicationViewRequestBodyGroupList {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string  | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName(): string | undefined {
        return this['application_name'];
    }
    public withComponentName(componentName: string): BatchCreateApplicationViewRequestBodyGroupList {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
    public withVendor(vendor: string): BatchCreateApplicationViewRequestBodyGroupList {
        this['vendor'] = vendor;
        return this;
    }
    public withRelationConfigurations(relationConfigurations: Array<GroupRelationConfiguration>): BatchCreateApplicationViewRequestBodyGroupList {
        this['relation_configurations'] = relationConfigurations;
        return this;
    }
    public set relationConfigurations(relationConfigurations: Array<GroupRelationConfiguration>  | undefined) {
        this['relation_configurations'] = relationConfigurations;
    }
    public get relationConfigurations(): Array<GroupRelationConfiguration> | undefined {
        return this['relation_configurations'];
    }
    public withRelatedDomainId(relatedDomainId: string): BatchCreateApplicationViewRequestBodyGroupList {
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

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateApplicationViewRequestBodyGroupListSyncModeEnum {
    MANUAL = 'MANUAL',
    AUTO = 'AUTO'
}
