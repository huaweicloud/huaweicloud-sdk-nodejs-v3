import { GroupRelationConfiguration } from './GroupRelationConfiguration';
import { GroupUpdateRequestSyncRules } from './GroupUpdateRequestSyncRules';


export class GroupUpdateRequest {
    public name?: string;
    private 'sync_mode'?: string;
    private 'sync_rules'?: Array<GroupUpdateRequestSyncRules>;
    private 'relation_configurations'?: Array<GroupRelationConfiguration>;
    public constructor(name?: string, syncMode?: string) { 
        this['name'] = name;
        this['sync_mode'] = syncMode;
    }
    public withName(name: string): GroupUpdateRequest {
        this['name'] = name;
        return this;
    }
    public withSyncMode(syncMode: string): GroupUpdateRequest {
        this['sync_mode'] = syncMode;
        return this;
    }
    public set syncMode(syncMode: string  | undefined) {
        this['sync_mode'] = syncMode;
    }
    public get syncMode(): string | undefined {
        return this['sync_mode'];
    }
    public withSyncRules(syncRules: Array<GroupUpdateRequestSyncRules>): GroupUpdateRequest {
        this['sync_rules'] = syncRules;
        return this;
    }
    public set syncRules(syncRules: Array<GroupUpdateRequestSyncRules>  | undefined) {
        this['sync_rules'] = syncRules;
    }
    public get syncRules(): Array<GroupUpdateRequestSyncRules> | undefined {
        return this['sync_rules'];
    }
    public withRelationConfigurations(relationConfigurations: Array<GroupRelationConfiguration>): GroupUpdateRequest {
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