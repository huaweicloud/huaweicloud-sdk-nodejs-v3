

export class OpenGaussHa {
    public mode?: OpenGaussHaModeEnum | string;
    public consistency?: OpenGaussHaConsistencyEnum | string;
    private 'replication_mode'?: OpenGaussHaReplicationModeEnum | string;
    public constructor(mode?: string, consistency?: string, replicationMode?: string) { 
        this['mode'] = mode;
        this['consistency'] = consistency;
        this['replication_mode'] = replicationMode;
    }
    public withMode(mode: OpenGaussHaModeEnum | string): OpenGaussHa {
        this['mode'] = mode;
        return this;
    }
    public withConsistency(consistency: OpenGaussHaConsistencyEnum | string): OpenGaussHa {
        this['consistency'] = consistency;
        return this;
    }
    public withReplicationMode(replicationMode: OpenGaussHaReplicationModeEnum | string): OpenGaussHa {
        this['replication_mode'] = replicationMode;
        return this;
    }
    public set replicationMode(replicationMode: OpenGaussHaReplicationModeEnum | string  | undefined) {
        this['replication_mode'] = replicationMode;
    }
    public get replicationMode(): OpenGaussHaReplicationModeEnum | string | undefined {
        return this['replication_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenGaussHaModeEnum {
    ENTERPRISE = 'enterprise',
    CENTRALIZATION_STANDARD = 'centralization_standard'
}
/**
    * @export
    * @enum {string}
    */
export enum OpenGaussHaConsistencyEnum {
    STRONG = 'strong',
    EVENTUAL = 'eventual'
}
/**
    * @export
    * @enum {string}
    */
export enum OpenGaussHaReplicationModeEnum {
    SYNC = 'sync'
}
