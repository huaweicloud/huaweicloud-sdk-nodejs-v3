

export class Config {
    private 'config_id'?: string;
    private 'config_name'?: ConfigConfigNameEnum | string;
    private 'config_value'?: string;
    private 'config_time'?: Date;
    public remark?: string;
    public used?: number;
    public constructor() { 
    }
    public withConfigId(configId: string): Config {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withConfigName(configName: ConfigConfigNameEnum | string): Config {
        this['config_name'] = configName;
        return this;
    }
    public set configName(configName: ConfigConfigNameEnum | string  | undefined) {
        this['config_name'] = configName;
    }
    public get configName(): ConfigConfigNameEnum | string | undefined {
        return this['config_name'];
    }
    public withConfigValue(configValue: string): Config {
        this['config_value'] = configValue;
        return this;
    }
    public set configValue(configValue: string  | undefined) {
        this['config_value'] = configValue;
    }
    public get configValue(): string | undefined {
        return this['config_value'];
    }
    public withConfigTime(configTime: Date): Config {
        this['config_time'] = configTime;
        return this;
    }
    public set configTime(configTime: Date  | undefined) {
        this['config_time'] = configTime;
    }
    public get configTime(): Date | undefined {
        return this['config_time'];
    }
    public withRemark(remark: string): Config {
        this['remark'] = remark;
        return this;
    }
    public withUsed(used: number): Config {
        this['used'] = used;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfigConfigNameEnum {
    API_NUM_LIMIT = 'API_NUM_LIMIT',
    APP_NUM_LIMIT = 'APP_NUM_LIMIT',
    APIGROUP_NUM_LIMIT = 'APIGROUP_NUM_LIMIT',
    ENVIRONMENT_NUM_LIMIT = 'ENVIRONMENT_NUM_LIMIT',
    VARIABLE_NUM_LIMIT = 'VARIABLE_NUM_LIMIT',
    SIGN_NUM_LIMIT = 'SIGN_NUM_LIMIT',
    THROTTLE_NUM_LIMIT = 'THROTTLE_NUM_LIMIT',
    APIGROUP_DOMAIN_NUM_LIMIT = 'APIGROUP_DOMAIN_NUM_LIMIT',
    API_VERSION_NUM_LIMIT = 'API_VERSION_NUM_LIMIT',
    VPC_NUM_LIMIT = 'VPC_NUM_LIMIT',
    VPC_INSTANCE_NUM_LIMIT = 'VPC_INSTANCE_NUM_LIMIT',
    API_PARAM_NUM_LIMIT = 'API_PARAM_NUM_LIMIT',
    API_USER_CALL_LIMIT = 'API_USER_CALL_LIMIT',
    ACL_NUM_LIMIT = 'ACL_NUM_LIMIT',
    APP_THROTTLE_LIMIT = 'APP_THROTTLE_LIMIT',
    USER_THROTTLE_LIMIT = 'USER_THROTTLE_LIMIT',
    API_NUM_LIMIT_PER_GROUP = 'API_NUM_LIMIT_PER_GROUP',
    API_POLICY_NUM_LIMIT = 'API_POLICY_NUM_LIMIT',
    API_CONDITION_NUM_LIMIT = 'API_CONDITION_NUM_LIMIT',
    SL_DOMAIN_CALL_LIMIT = 'SL_DOMAIN_CALL_LIMIT',
    ELB_SWITCH = 'ELB_SWITCH',
    AUTHORIZER_NUM_LIMIT = 'AUTHORIZER_NUM_LIMIT',
    AUTHORIZER_IDENTITY_NUM_LIMIT = 'AUTHORIZER_IDENTITY_NUM_LIMIT',
    APP_CODE_NUM_LIMIT = 'APP_CODE_NUM_LIMIT',
    REGION_MANAGER_WHITELIST_SERVICES = 'REGION_MANAGER_WHITELIST_SERVICES',
    API_SWAGGER_NUM_LIMIT = 'API_SWAGGER_NUM_LIMIT',
    API_TAG_NUM_LIMIT = 'API_TAG_NUM_LIMIT',
    LTS_SWITCH = 'LTS_SWITCH',
    APP_KEY_SECRET_SWITCH = 'APP_KEY_SECRET_SWITCH',
    RESPONSE_NUM_LIMIT = 'RESPONSE_NUM_LIMIT',
    CONFIG_NUM_LIMIT_PER_APP = 'CONFIG_NUM_LIMIT_PER_APP',
    BACKEND_TOKEN_ALLOW_SWITCH = 'BACKEND_TOKEN_ALLOW_SWITCH',
    APP_TOKEN_SWITCH = 'APP_TOKEN_SWITCH',
    API_DESIGNER_SWITCH = 'API_DESIGNER_SWITCH',
    APP_API_KEY_SWITCH = 'APP_API_KEY_SWITCH',
    APP_BASIC_SWITCH = 'APP_BASIC_SWITCH',
    APP_JWT_SWITCH = 'APP_JWT_SWITCH',
    APP_ROUTE_SWITCH = 'APP_ROUTE_SWITCH',
    PUBLIC_KEY_SWITCH = 'PUBLIC_KEY_SWITCH',
    APP_SECRET_SWITCH = 'APP_SECRET_SWITCH',
    CASCADE_SWITCH = 'CASCADE_SWITCH',
    IS_INIT_API_PATH_HASH = 'IS_INIT_API_PATH_HASH'
}
