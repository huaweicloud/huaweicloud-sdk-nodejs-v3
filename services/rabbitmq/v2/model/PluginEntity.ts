

export class PluginEntity {
    public running?: boolean;
    public enable?: boolean;
    public name?: string;
    public version?: string;
    public constructor() { 
    }
    public withRunning(running: boolean): PluginEntity {
        this['running'] = running;
        return this;
    }
    public withEnable(enable: boolean): PluginEntity {
        this['enable'] = enable;
        return this;
    }
    public withName(name: string): PluginEntity {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): PluginEntity {
        this['version'] = version;
        return this;
    }
}