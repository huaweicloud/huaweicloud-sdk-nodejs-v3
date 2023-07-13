

export class ClusterMetadataForUpdate {
    public alias?: string;
    public constructor() { 
    }
    public withAlias(alias: string): ClusterMetadataForUpdate {
        this['alias'] = alias;
        return this;
    }
}