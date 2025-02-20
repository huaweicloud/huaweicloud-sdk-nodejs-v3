import { BatchCreateApplicationViewRequestBodySyncRules } from './BatchCreateApplicationViewRequestBodySyncRules';


export class BatchCreateApplicationViewRequestBodyGroupList {
    public name?: string;
    private 'region_id'?: string;
    private 'parent_name'?: string;
    private 'sync_mode'?: string;
    private 'cmdb_resource_id_list'?: Array<string>;
    private 'sync_rules'?: Array<BatchCreateApplicationViewRequestBodySyncRules>;
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
    public withSyncMode(syncMode: string): BatchCreateApplicationViewRequestBodyGroupList {
        this['sync_mode'] = syncMode;
        return this;
    }
    public set syncMode(syncMode: string  | undefined) {
        this['sync_mode'] = syncMode;
    }
    public get syncMode(): string | undefined {
        return this['sync_mode'];
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
}