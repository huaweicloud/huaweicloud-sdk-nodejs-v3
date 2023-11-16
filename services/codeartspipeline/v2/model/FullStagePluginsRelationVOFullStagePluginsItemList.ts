import { FullStagePluginsRelationVOAddables } from './FullStagePluginsRelationVOAddables';
import { FullStagePluginsRelationVOPluginsList } from './FullStagePluginsRelationVOPluginsList';


export class FullStagePluginsRelationVOFullStagePluginsItemList {
    private 'plugins_list'?: Array<FullStagePluginsRelationVOPluginsList>;
    private 'display_name'?: string;
    private 'business_type'?: string;
    private 'unique_id'?: string;
    public conditions?: Array<string>;
    public addables?: Array<FullStagePluginsRelationVOAddables>;
    public editable?: boolean;
    public removable?: boolean;
    public cloneable?: boolean;
    public disabled?: boolean;
    public constructor() { 
    }
    public withPluginsList(pluginsList: Array<FullStagePluginsRelationVOPluginsList>): FullStagePluginsRelationVOFullStagePluginsItemList {
        this['plugins_list'] = pluginsList;
        return this;
    }
    public set pluginsList(pluginsList: Array<FullStagePluginsRelationVOPluginsList>  | undefined) {
        this['plugins_list'] = pluginsList;
    }
    public get pluginsList(): Array<FullStagePluginsRelationVOPluginsList> | undefined {
        return this['plugins_list'];
    }
    public withDisplayName(displayName: string): FullStagePluginsRelationVOFullStagePluginsItemList {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withBusinessType(businessType: string): FullStagePluginsRelationVOFullStagePluginsItemList {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withUniqueId(uniqueId: string): FullStagePluginsRelationVOFullStagePluginsItemList {
        this['unique_id'] = uniqueId;
        return this;
    }
    public set uniqueId(uniqueId: string  | undefined) {
        this['unique_id'] = uniqueId;
    }
    public get uniqueId(): string | undefined {
        return this['unique_id'];
    }
    public withConditions(conditions: Array<string>): FullStagePluginsRelationVOFullStagePluginsItemList {
        this['conditions'] = conditions;
        return this;
    }
    public withAddables(addables: Array<FullStagePluginsRelationVOAddables>): FullStagePluginsRelationVOFullStagePluginsItemList {
        this['addables'] = addables;
        return this;
    }
    public withEditable(editable: boolean): FullStagePluginsRelationVOFullStagePluginsItemList {
        this['editable'] = editable;
        return this;
    }
    public withRemovable(removable: boolean): FullStagePluginsRelationVOFullStagePluginsItemList {
        this['removable'] = removable;
        return this;
    }
    public withCloneable(cloneable: boolean): FullStagePluginsRelationVOFullStagePluginsItemList {
        this['cloneable'] = cloneable;
        return this;
    }
    public withDisabled(disabled: boolean): FullStagePluginsRelationVOFullStagePluginsItemList {
        this['disabled'] = disabled;
        return this;
    }
}