

export class Config {
    public key: string;
    public value: string;
    private 'config_file_name': string | undefined;
    public constructor(key?: any, value?: any, configFileName?: any) { 
        this['key'] = key;
        this['value'] = value;
        this['config_file_name'] = configFileName;
    }
    public withKey(key: string): Config {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): Config {
        this['value'] = value;
        return this;
    }
    public withConfigFileName(configFileName: string): Config {
        this['config_file_name'] = configFileName;
        return this;
    }
    public set configFileName(configFileName: string | undefined) {
        this['config_file_name'] = configFileName;
    }
    public get configFileName() {
        return this['config_file_name'];
    }
}