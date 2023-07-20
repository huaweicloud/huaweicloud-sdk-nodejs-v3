

export class Ha {
    public mode?: HaModeEnum | string;
    private 'replication_mode'?: HaReplicationModeEnum | string;
    public constructor(mode?: string, replicationMode?: string) { 
        this['mode'] = mode;
        this['replication_mode'] = replicationMode;
    }
    public withMode(mode: HaModeEnum | string): Ha {
        this['mode'] = mode;
        return this;
    }
    public withReplicationMode(replicationMode: HaReplicationModeEnum | string): Ha {
        this['replication_mode'] = replicationMode;
        return this;
    }
    public set replicationMode(replicationMode: HaReplicationModeEnum | string  | undefined) {
        this['replication_mode'] = replicationMode;
    }
    public get replicationMode(): HaReplicationModeEnum | string | undefined {
        return this['replication_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HaModeEnum {
    HA = 'Ha',
    SINGLE = 'Single'
}
/**
    * @export
    * @enum {string}
    */
export enum HaReplicationModeEnum {
    ASYNC = 'async',
    SEMISYNC = 'semisync',
    SYNC = 'sync'
}
