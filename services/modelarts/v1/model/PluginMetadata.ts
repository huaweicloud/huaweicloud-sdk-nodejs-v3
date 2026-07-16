

export class PluginMetadata {
    public name?: string;
    public creationTimestamp?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): PluginMetadata {
        this['name'] = name;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): PluginMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
}