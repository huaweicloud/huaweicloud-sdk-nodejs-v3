

export class OpenGaussHaOption {
    public mode?: OpenGaussHaOptionModeEnum | string;
    public consistency?: OpenGaussHaOptionConsistencyEnum | string;
    private 'replication_mode'?: OpenGaussHaOptionReplicationModeEnum | string;
    public constructor(mode?: string, consistency?: string, replicationMode?: string) { 
        this['mode'] = mode;
        this['consistency'] = consistency;
        this['replication_mode'] = replicationMode;
    }
    public withMode(mode: OpenGaussHaOptionModeEnum | string): OpenGaussHaOption {
        this['mode'] = mode;
        return this;
    }
    public withConsistency(consistency: OpenGaussHaOptionConsistencyEnum | string): OpenGaussHaOption {
        this['consistency'] = consistency;
        return this;
    }
    public withReplicationMode(replicationMode: OpenGaussHaOptionReplicationModeEnum | string): OpenGaussHaOption {
        this['replication_mode'] = replicationMode;
        return this;
    }
    public set replicationMode(replicationMode: OpenGaussHaOptionReplicationModeEnum | string  | undefined) {
        this['replication_mode'] = replicationMode;
    }
    public get replicationMode(): OpenGaussHaOptionReplicationModeEnum | string | undefined {
        return this['replication_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenGaussHaOptionModeEnum {
    ENTERPRISE = 'enterprise',
    CENTRALIZATION_STANDARD = 'centralization_standard'
}
/**
    * @export
    * @enum {string}
    */
export enum OpenGaussHaOptionConsistencyEnum {
    STRONG = 'strong',
    EVENTUAL = 'eventual'
}
/**
    * @export
    * @enum {string}
    */
export enum OpenGaussHaOptionReplicationModeEnum {
    SYNC = 'sync'
}
