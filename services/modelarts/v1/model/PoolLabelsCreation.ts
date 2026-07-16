

export class PoolLabelsCreation {
    private 'os.modelarts/name'?: string;
    private 'os.modelarts/workspace.id'?: string;
    private 'os.modelarts/node.prefix'?: string;
    public constructor(osModelartsName?: string) { 
        this['os.modelarts/name'] = osModelartsName;
    }
    public withOsModelartsName(osModelartsName: string): PoolLabelsCreation {
        this['os.modelarts/name'] = osModelartsName;
        return this;
    }
    public set osModelartsName(osModelartsName: string  | undefined) {
        this['os.modelarts/name'] = osModelartsName;
    }
    public get osModelartsName(): string | undefined {
        return this['os.modelarts/name'];
    }
    public withOsModelartsWorkspaceId(osModelartsWorkspaceId: string): PoolLabelsCreation {
        this['os.modelarts/workspace.id'] = osModelartsWorkspaceId;
        return this;
    }
    public set osModelartsWorkspaceId(osModelartsWorkspaceId: string  | undefined) {
        this['os.modelarts/workspace.id'] = osModelartsWorkspaceId;
    }
    public get osModelartsWorkspaceId(): string | undefined {
        return this['os.modelarts/workspace.id'];
    }
    public withOsModelartsNodePrefix(osModelartsNodePrefix: string): PoolLabelsCreation {
        this['os.modelarts/node.prefix'] = osModelartsNodePrefix;
        return this;
    }
    public set osModelartsNodePrefix(osModelartsNodePrefix: string  | undefined) {
        this['os.modelarts/node.prefix'] = osModelartsNodePrefix;
    }
    public get osModelartsNodePrefix(): string | undefined {
        return this['os.modelarts/node.prefix'];
    }
}