

export class OpenGaussHaOption {
    public mode?: OpenGaussHaOptionModeEnum | string;
    public consistency?: OpenGaussHaOptionConsistencyEnum | string;
    private 'replication_mode'?: OpenGaussHaOptionReplicationModeEnum | string;
    private 'instance_mode'?: OpenGaussHaOptionInstanceModeEnum | string;
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
    public withInstanceMode(instanceMode: OpenGaussHaOptionInstanceModeEnum | string): OpenGaussHaOption {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: OpenGaussHaOptionInstanceModeEnum | string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): OpenGaussHaOptionInstanceModeEnum | string | undefined {
        return this['instance_mode'];
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
/**
    * @export
    * @enum {string}
    */
export enum OpenGaussHaOptionInstanceModeEnum {
    ENTERPRISE = 'enterprise',
    BASIC = 'basic',
    ECOLOGY = 'ecology'
}
