

export class CreateInstanceConfigurationsOption {
    public type?: CreateInstanceConfigurationsOptionTypeEnum | string;
    private 'configuration_id'?: string;
    public constructor(type?: string, configurationId?: string) { 
        this['type'] = type;
        this['configuration_id'] = configurationId;
    }
    public withType(type: CreateInstanceConfigurationsOptionTypeEnum | string): CreateInstanceConfigurationsOption {
        this['type'] = type;
        return this;
    }
    public withConfigurationId(configurationId: string): CreateInstanceConfigurationsOption {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceConfigurationsOptionTypeEnum {
    MONGOS = 'mongos',
    SHARD = 'shard',
    CONFIG = 'config',
    REPLICA = 'replica',
    SINGLE = 'single'
}
