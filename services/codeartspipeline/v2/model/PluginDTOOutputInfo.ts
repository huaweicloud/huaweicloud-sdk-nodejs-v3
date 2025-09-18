

export class PluginDTOOutputInfo {
    public name?: string;
    public version?: string;
    public description?: string;
    public source?: string;
    public type?: string;
    public constructor() { 
    }
    public withName(name: string): PluginDTOOutputInfo {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): PluginDTOOutputInfo {
        this['version'] = version;
        return this;
    }
    public withDescription(description: string): PluginDTOOutputInfo {
        this['description'] = description;
        return this;
    }
    public withSource(source: string): PluginDTOOutputInfo {
        this['source'] = source;
        return this;
    }
    public withType(type: string): PluginDTOOutputInfo {
        this['type'] = type;
        return this;
    }
}