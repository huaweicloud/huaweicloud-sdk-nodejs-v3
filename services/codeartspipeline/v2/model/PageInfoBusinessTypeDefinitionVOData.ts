import { PageInfoBusinessTypeDefinitionVOPluginsList } from './PageInfoBusinessTypeDefinitionVOPluginsList';


export class PageInfoBusinessTypeDefinitionVOData {
    public businessType?: string;
    public displayName?: string;
    public uniqueId?: string;
    public editable?: boolean;
    public removable?: boolean;
    public cloneable?: boolean;
    public disabled?: boolean;
    public conditions?: Array<string>;
    private 'plugins_list'?: Array<PageInfoBusinessTypeDefinitionVOPluginsList>;
    public constructor() { 
    }
    public withBusinessType(businessType: string): PageInfoBusinessTypeDefinitionVOData {
        this['businessType'] = businessType;
        return this;
    }
    public withDisplayName(displayName: string): PageInfoBusinessTypeDefinitionVOData {
        this['displayName'] = displayName;
        return this;
    }
    public withUniqueId(uniqueId: string): PageInfoBusinessTypeDefinitionVOData {
        this['uniqueId'] = uniqueId;
        return this;
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