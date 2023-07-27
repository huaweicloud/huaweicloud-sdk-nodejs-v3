

export class InstanceConfig {
    private 'config_id'?: string;
    private 'config_name'?: InstanceConfigConfigNameEnum | string;
    private 'config_value'?: string;
    private 'config_time'?: Date;
    public remark?: string;
    public constructor() { 
    }
    public withConfigId(configId: string): InstanceConfig {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withConfigName(configName: InstanceConfigConfigNameEnum | string): InstanceConfig {
        this['config_name'] = configName;
        return this;
    }
    public set configName(configName: InstanceConfigConfigNameEnum | string  | undefined) {
        this['config_name'] = configName;
    }
    public get configName(): InstanceConfigConfigNameEnum | string | undefined {
        return this['config_name'];
    }
    public withConfigValue(configValue: string): InstanceConfig {
        this['config_value'] = configValue;
        return this;
    }
    public set configValue(configValue: string  | undefined) {
        this['config_value'] = configValue;
    }
    public get configValue(): string | undefined {
        return this['config_value'];
    }
    public withConfigTime(configTime: Date): InstanceConfig {
        this['config_time'] = configTime;
        return this;
    }
    public set configTime(configTime: Date  | undefined) {
        this['config_time'] = configTime;
    }
    public get configTime(): Date | undefined {
        return this['config_time'];
    }
    public withRemark(remark: string): InstanceConfig {
        this['remark'] = remark;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstanceConfigConfigNameEnum {
    INSTANCE_NUM_LIMIT = 'INSTANCE_NUM_LIMIT'
}
