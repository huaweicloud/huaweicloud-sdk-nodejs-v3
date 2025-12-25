

export class HwcRdsHa {
    private 'replication_mode'?: string;
    public constructor(replicationMode?: string) { 
        this['replication_mode'] = replicationMode;
    }
    public withReplicationMode(replicationMode: string): HwcRdsHa {
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