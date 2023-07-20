

export class HaResponse {
    private 'replication_mode'?: HaResponseReplicationModeEnum | string;
    public constructor(replicationMode?: string) { 
        this['replication_mode'] = replicationMode;
    }
    public withReplicationMode(replicationMode: HaResponseReplicationModeEnum | string): HaResponse {
        this['replication_mode'] = replicationMode;
        return this;
    }
    public set replicationMode(replicationMode: HaResponseReplicationModeEnum | string  | undefined) {
        this['replication_mode'] = replicationMode;
    }
    public get replicationMode(): HaResponseReplicationModeEnum | string | undefined {
        return this['replication_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HaResponseReplicationModeEnum {
    ASYNC = 'async',
    SEMISYNC = 'semisync',
    SYNC = 'sync'
}
