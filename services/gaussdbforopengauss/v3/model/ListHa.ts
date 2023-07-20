

export class ListHa {
    public consistency?: ListHaConsistencyEnum | string;
    private 'replication_mode'?: string;
    public constructor(consistency?: string, replicationMode?: string) { 
        this['consistency'] = consistency;
        this['replication_mode'] = replicationMode;
    }
    public withConsistency(consistency: ListHaConsistencyEnum | string): ListHa {
        this['consistency'] = consistency;
        return this;
    }
    public withReplicationMode(replicationMode: string): ListHa {
        this['replication_mode'] = replicationMode;
        return this;
    }
    public set replicationMode(replicationMode: string  | undefined) {
        this['replication_mode'] = replicationMode;
    }
    public get replicationMode(): string | undefined {
        return this['replication_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListHaConsistencyEnum {
    STRONG = 'strong',
    EVENTUAL = 'eventual'
}
