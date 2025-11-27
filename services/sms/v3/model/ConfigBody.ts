

export class ConfigBody {
    private 'config_key'?: ConfigBodyConfigKeyEnum | string;
    private 'config_value'?: string;
    private 'config_status'?: string;
    public constructor(configKey?: string, configValue?: string) { 
        this['config_key'] = configKey;
        this['config_value'] = configValue;
    }
    public withConfigKey(configKey: ConfigBodyConfigKeyEnum | string): ConfigBody {
        this['config_key'] = configKey;
        return this;
    }
    public set configKey(configKey: ConfigBodyConfigKeyEnum | string  | undefined) {
        this['config_key'] = configKey;
    }
    public get configKey(): ConfigBodyConfigKeyEnum | string | undefined {
        return this['config_key'];
    }
    public withConfigValue(configValue: string): ConfigBody {
        this['config_value'] = configValue;
        return this;
    }
    public set configValue(configValue: string  | undefined) {
        this['config_value'] = configValue;
    }
    public get configValue(): string | undefined {
        return this['config_value'];
    }
    public withConfigStatus(configStatus: string): ConfigBody {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: string  | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus(): string | undefined {
        return this['config_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfigBodyConfigKeyEnum {
    MIGRATE_EXCLUDE_DIR = 'MIGRATE_EXCLUDE_DIR',
    SYNC_EXCLUDE_DIR = 'SYNC_EXCLUDE_DIR',
    ONLY_SYNC_DIR = 'ONLY_SYNC_DIR',
    CONSISTENCY_DIR = 'CONSISTENCY_DIR',
    CONSISTENCY_DIR_ILLEGAL = 'CONSISTENCY_DIR_ILLEGAL',
    LINUX_BLOCK_COMPRESS_THREAD_NUM = 'LINUX_BLOCK_COMPRESS_THREAD_NUM',
    MIGRATE_DST_IP = 'MIGRATE_DST_IP',
    LINUX_BLOCK_CACHE_SIZE = 'LINUX_BLOCK_CACHE_SIZE',
    LINUX_CPU_LIMIT = 'LINUX_CPU_LIMIT',
    LINUX_MEM_LIMIT = 'LINUX_MEM_LIMIT',
    LINUX_IO_LIMIT = 'LINUX_IO_LIMIT',
    NUM_PROCESS_MIGRATE = 'NUM_PROCESS_MIGRATE',
    NUM_PROCESS_SYNC = 'NUM_PROCESS_SYNC',
    CONSISTENCY_RECHECK = 'CONSISTENCY_RECHECK',
    CONSISTENCY_MODE = 'CONSISTENCY_MODE',
    DYNAMIC_PORT = 'DYNAMIC_PORT'
}
