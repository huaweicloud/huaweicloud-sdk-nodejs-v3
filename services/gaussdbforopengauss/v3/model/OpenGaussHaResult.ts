

export class OpenGaussHaResult {
    public mode?: OpenGaussHaResultModeEnum | string;
    private 'replication_mode'?: OpenGaussHaResultReplicationModeEnum | string;
    public consistency?: OpenGaussHaResultConsistencyEnum | string;
    private 'consistency_protocol'?: string;
    public constructor(mode?: string, replicationMode?: string, consistency?: string) { 
        this['mode'] = mode;
        this['replication_mode'] = replicationMode;
        this['consistency'] = consistency;
    }
    public withMode(mode: OpenGaussHaResultModeEnum | string): OpenGaussHaResult {
        this['mode'] = mode;
        return this;
    }
    public withReplicationMode(replicationMode: OpenGaussHaResultReplicationModeEnum | string): OpenGaussHaResult {
        this['replication_mode'] = replicationMode;
        return this;
    }
    public set replicationMode(replicationMode: OpenGaussHaResultReplicationModeEnum | string  | undefined) {
        this['replication_mode'] = replicationMode;
    }
    public get replicationMode(): OpenGaussHaResultReplicationModeEnum | string | undefined {
        return this['replication_mode'];
    }
    public withConsistency(consistency: OpenGaussHaResultConsistencyEnum | string): OpenGaussHaResult {
        this['consistency'] = consistency;
        return this;
    }
    public withConsistencyProtocol(consistencyProtocol: string): OpenGaussHaResult {
        this['consistency_protocol'] = consistencyProtocol;
        return this;
    }
    public set consistencyProtocol(consistencyProtocol: string  | undefined) {
        this['consistency_protocol'] = consistencyProtocol;
    }
    public get consistencyProtocol(): string | undefined {
        return this['consistency_protocol'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenGaussHaResultModeEnum {
    ENTERPRISE = 'Enterprise',
    CENTRALIZATION_STANDARD = 'centralization_standard'
}
/**
    * @export
    * @enum {string}
    */
export enum OpenGaussHaResultReplicationModeEnum {
    SYNC = 'sync'
}
/**
    * @export
    * @enum {string}
    */
export enum OpenGaussHaResultConsistencyEnum {
    STRONG = 'strong',
    EVENTUAL = 'eventual'
}
