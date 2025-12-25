

export class NodeExpansionInfo {
    private 'custom_label'?: string;
    private 'data_center'?: string;
    public description?: string;
    public maintainer?: string;
    private 'network_plane'?: string;
    public constructor() { 
    }
    public withCustomLabel(customLabel: string): NodeExpansionInfo {
        this['custom_label'] = customLabel;
        return this;
    }
    public set customLabel(customLabel: string  | undefined) {
        this['custom_label'] = customLabel;
    }
    public get customLabel(): string | undefined {
        return this['custom_label'];
    }
    public withDataCenter(dataCenter: string): NodeExpansionInfo {
        this['data_center'] = dataCenter;
        return this;
    }
    public set dataCenter(dataCenter: string  | undefined) {
        this['data_center'] = dataCenter;
    }
    public get dataCenter(): string | undefined {
        return this['data_center'];
    }
    public withDescription(description: string): NodeExpansionInfo {
        this['description'] = description;
        return this;
    }
    public withMaintainer(maintainer: string): NodeExpansionInfo {
        this['maintainer'] = maintainer;
        return this;
    }
    public withNetworkPlane(networkPlane: string): NodeExpansionInfo {
        this['network_plane'] = networkPlane;
        return this;
    }
    public set networkPlane(networkPlane: string  | undefined) {
        this['network_plane'] = networkPlane;
    }
    public get networkPlane(): string | undefined {
        return this['network_plane'];
    }
}