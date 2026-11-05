

export class SupabaseHaConfig {
    public mode?: SupabaseHaConfigModeEnum | string;
    private 'replication_mode'?: SupabaseHaConfigReplicationModeEnum | string;
    public constructor() { 
    }
    public withMode(mode: SupabaseHaConfigModeEnum | string): SupabaseHaConfig {
        this['mode'] = mode;
        return this;
    }
    public withReplicationMode(replicationMode: SupabaseHaConfigReplicationModeEnum | string): SupabaseHaConfig {
        this['replication_mode'] = replicationMode;
        return this;
    }
    public set replicationMode(replicationMode: SupabaseHaConfigReplicationModeEnum | string  | undefined) {
        this['replication_mode'] = replicationMode;
    }
    public get replicationMode(): SupabaseHaConfigReplicationModeEnum | string | undefined {
        return this['replication_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SupabaseHaConfigModeEnum {
    HA = 'Ha',
    SINGLE = 'Single'
}
/**
    * @export
    * @enum {string}
    */
export enum SupabaseHaConfigReplicationModeEnum {
    ASYNC = 'async',
    SYNC = 'sync'
}
