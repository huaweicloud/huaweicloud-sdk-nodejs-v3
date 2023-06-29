

export class ExpandGraphReqExpand {
    public replication: number;
    public constructor(replication?: any) { 
        this['replication'] = replication;
    }
    public withReplication(replication: number): ExpandGraphReqExpand {
        this['replication'] = replication;
        return this;
    }
}