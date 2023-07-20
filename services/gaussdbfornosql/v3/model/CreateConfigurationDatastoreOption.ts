

export class CreateConfigurationDatastoreOption {
    public type?: string;
    public version?: string;
    public mode?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): CreateConfigurationDatastoreOption {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): CreateConfigurationDatastoreOption {
        this['version'] = version;
        return this;
    }
    public withMode(mode: string): CreateConfigurationDatastoreOption {
        this['mode'] = mode;
        return this;
    }
}