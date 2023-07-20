

export class ExpandGraphReqExpand {
    public replication?: number;
    public constructor(replication?: number) { 
        this['replication'] = replication;
    }
    public withReplication(replication: number): ExpandGraphReqExpand {
        this['replication'] = replication;
        return this;
    }
}