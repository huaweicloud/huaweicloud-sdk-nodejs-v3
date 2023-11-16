

export class PageInfoResponseListPluginBasicVOData {
    public pluginName?: string;
    public displayName?: string;
    public version?: string;
    public versionDescription?: string;
    public description?: string;
    public versionAttribution?: string;
    public uniqueId?: string;
    public opUser?: string;
    public opTime?: string;
    public pluginCompositionType?: string;
    public pluginAttribution?: string;
    public workspaceId?: string;
    public businessType?: string;
    public businessTypeDisplayName?: string;
    public maintainers?: string;
    public iconUrl?: string;
    public referCount?: number;
    public usageCount?: number;
    public runtimeAttribution?: string;
    public active?: number;
    public constructor() { 
    }
    public withPluginName(pluginName: string): PageInfoResponseListPluginBasicVOData {
        this['pluginName'] = pluginName;
        return this;
    }
    public withDisplayName(displayName: string): PageInfoResponseListPluginBasicVOData {
        this['displayName'] = displayName;
        return this;
    }
    public withVersion(version: string): PageInfoResponseListPluginBasicVOData {
        this['version'] = version;
        return this;
    }
    public withVersionDescription(versionDescription: string): PageInfoResponseListPluginBasicVOData {
        this['versionDescription'] = versionDescription;
        return this;
    }
    public withDescription(description: string): PageInfoResponseListPluginBasicVOData {
        this['description'] = description;
        return this;
    }
    public withVersionAttribution(versionAttribution: string): PageInfoResponseListPluginBasicVOData {
        this['versionAttribution'] = versionAttribution;
        return this;
    }
    public withUniqueId(uniqueId: string): PageInfoResponseListPluginBasicVOData {
        this['uniqueId'] = uniqueId;
        return this;
    }
    public withOpUser(opUser: string): PageInfoResponseListPluginBasicVOData {
        this['opUser'] = opUser;
        return this;
    }
    public withOpTime(opTime: string): PageInfoResponseListPluginBasicVOData {
        this['opTime'] = opTime;
        return this;
    }
    public withPluginCompositionType(pluginCompositionType: string): PageInfoResponseListPluginBasicVOData {
        this['pluginCompositionType'] = pluginCompositionType;
        return this;
    }
    public withPluginAttribution(pluginAttribution: string): PageInfoResponseListPluginBasicVOData {
        this['pluginAttribution'] = pluginAttribution;
        return this;
    }
    public withWorkspaceId(workspaceId: string): PageInfoResponseListPluginBasicVOData {
        this['workspaceId'] = workspaceId;
        return this;
    }
    public withBusinessType(businessType: string): PageInfoResponseListPluginBasicVOData {
        this['businessType'] = businessType;
        return this;
    }
    public withBusinessTypeDisplayName(businessTypeDisplayName: string): PageInfoResponseListPluginBasicVOData {
        this['businessTypeDisplayName'] = businessTypeDisplayName;
        return this;
    }
    public withMaintainers(maintainers: string): PageInfoResponseListPluginBasicVOData {
        this['maintainers'] = maintainers;
        return this;
    }
    public withIconUrl(iconUrl: string): PageInfoResponseListPluginBasicVOData {
        this['iconUrl'] = iconUrl;
        return this;
    }
    public withReferCount(referCount: number): PageInfoResponseListPluginBasicVOData {
        this['referCount'] = referCount;
        return this;
    }
    public withUsageCount(usageCount: number): PageInfoResponseListPluginBasicVOData {
        this['usageCount'] = usageCount;
        return this;
    }
    public withRuntimeAttribution(runtimeAttribution: string): PageInfoResponseListPluginBasicVOData {
        this['runtimeAttribution'] = runtimeAttribution;
        return this;
    }
    public withActive(active: number): PageInfoResponseListPluginBasicVOData {
        this['active'] = active;
        return this;
    }
}