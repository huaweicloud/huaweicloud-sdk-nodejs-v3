

export class NetworkMetadataLabels {
    private 'os.modelarts/name'?: string;
    private 'os.modelarts/workspace.id'?: string;
    public constructor(osModelartsName?: string) { 
        this['os.modelarts/name'] = osModelartsName;
    }
    public withOsModelartsName(osModelartsName: string): NetworkMetadataLabels {
        this['os.modelarts/name'] = osModelartsName;
        return this;
    }
    public set osModelartsName(osModelartsName: string  | undefined) {
        this['os.modelarts/name'] = osModelartsName;
    }
    public get osModelartsName(): string | undefined {
        return this['os.modelarts/name'];
    }
    public withOsModelartsWorkspaceId(osModelartsWorkspaceId: string): NetworkMetadataLabels {
        this['os.modelarts/workspace.id'] = osModelartsWorkspaceId;
        return this;
    }
    public set osModelartsWorkspaceId(osModelartsWorkspaceId: string  | undefined) {
        this['os.modelarts/workspace.id'] = osModelartsWorkspaceId;
    }
    public get osModelartsWorkspaceId(): string | undefined {
        return this['os.modelarts/workspace.id'];
    }
}