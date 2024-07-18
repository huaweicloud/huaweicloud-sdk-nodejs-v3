

export class AutopilotClusterMetadataForUpdate {
    public alias?: string;
    public constructor() { 
    }
    public withAlias(alias: string): AutopilotClusterMetadataForUpdate {
        this['alias'] = alias;
        return this;
    }
}