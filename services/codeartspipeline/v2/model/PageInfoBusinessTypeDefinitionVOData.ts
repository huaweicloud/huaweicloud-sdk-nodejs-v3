import { PageInfoBusinessTypeDefinitionVOPluginsList } from './PageInfoBusinessTypeDefinitionVOPluginsList';


export class PageInfoBusinessTypeDefinitionVOData {
    private 'business_type'?: string;
    private 'display_name'?: string;
    private 'unique_id'?: string;
    public editable?: boolean;
    public removable?: boolean;
    public cloneable?: boolean;
    public disabled?: boolean;
    public conditions?: Array<string>;
    private 'plugins_list'?: Array<PageInfoBusinessTypeDefinitionVOPluginsList>;
    public constructor() { 
    }
    public withBusinessType(businessType: string): PageInfoBusinessTypeDefinitionVOData {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withDisplayName(displayName: string): PageInfoBusinessTypeDefinitionVOData {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withUniqueId(uniqueId: string): PageInfoBusinessTypeDefinitionVOData {
        this['unique_id'] = uniqueId;
        return this;
    }
    public set uniqueId(uniqueId: string  | undefined) {
        this['unique_id'] = uniqueId;
    }
    public get uniqueId(): string | undefined {
        return this['unique_id'];
    }
    public withEditable(editable: boolean): PageInfoBusinessTypeDefinitionVOData {
        this['editable'] = editable;
        return this;
    }
    public withRemovable(removable: boolean): PageInfoBusinessTypeDefinitionVOData {
        this['removable'] = removable;
        return this;
    }
    public withCloneable(cloneable: boolean): PageInfoBusinessTypeDefinitionVOData {
        this['cloneable'] = cloneable;
        return this;
    }
    public withDisabled(disabled: boolean): PageInfoBusinessTypeDefinitionVOData {
        this['disabled'] = disabled;
        return this;
    }
    public withConditions(conditions: Array<string>): PageInfoBusinessTypeDefinitionVOData {
        this['conditions'] = conditions;
        return this;
    }
    public withPluginsList(pluginsList: Array<PageInfoBusinessTypeDefinitionVOPluginsList>): PageInfoBusinessTypeDefinitionVOData {
        this['plugins_list'] = pluginsList;
        return this;
    }
    public set pluginsList(pluginsList: Array<PageInfoBusinessTypeDefinitionVOPluginsList>  | undefined) {
        this['plugins_list'] = pluginsList;
    }
    public get pluginsList(): Array<PageInfoBusinessTypeDefinitionVOPluginsList> | undefined {
        return this['plugins_list'];
    }
}