

export class OpenGaussHaResponse {
    public mode?: OpenGaussHaResponseModeEnum | string;
    private 'replication_mode'?: OpenGaussHaResponseReplicationModeEnum | string;
    public consistency?: OpenGaussHaResponseConsistencyEnum | string;
    public constructor(mode?: string, replicationMode?: string, consistency?: string) { 
        this['mode'] = mode;
        this['replication_mode'] = replicationMode;
        this['consistency'] = consistency;
    }
    public withMode(mode: OpenGaussHaResponseModeEnum | string): OpenGaussHaResponse {
        this['mode'] = mode;
        return this;
    }
    public withReplicationMode(replicationMode: OpenGaussHaResponseReplicationModeEnum | string): OpenGaussHaResponse {
        this['replication_mode'] = replicationMode;
        return this;
    }
    public set replicationMode(replicationMode: OpenGaussHaResponseReplicationModeEnum | string  | undefined) {
        this['replication_mode'] = replicationMode;
    }
    public get replicationMode(): OpenGaussHaResponseReplicationModeEnum | string | undefined {
        return this['replication_mode'];
    }
    public withConsistency(consistency: OpenGaussHaResponseConsistencyEnum | string): OpenGaussHaResponse {
        this['consistency'] = consistency;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenGaussHaResponseModeEnum {
    ENTERPRISE = 'Enterprise',
    HA = 'Ha'
}
/**
    * @export
    * @enum {string}
    */
export enum OpenGaussHaResponseReplicationModeEnum {
    SYNC = 'sync'
}
/**
    * @export
    * @enum {string}
    */
export enum OpenGaussHaResponseConsistencyEnum {
    STRONG = 'strong',
    EVENTUAL = 'eventual'
}
