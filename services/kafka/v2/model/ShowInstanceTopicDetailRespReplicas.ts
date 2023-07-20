

export class ShowInstanceTopicDetailRespReplicas {
    public broker?: number;
    public leader?: boolean;
    private 'in_sync'?: boolean;
    public size?: number;
    public lag?: number;
    public constructor() { 
    }
    public withBroker(broker: number): ShowInstanceTopicDetailRespReplicas {
        this['broker'] = broker;
        return this;
    }
    public withLeader(leader: boolean): ShowInstanceTopicDetailRespReplicas {
        this['leader'] = leader;
        return this;
    }
    public withInSync(inSync: boolean): ShowInstanceTopicDetailRespReplicas {
        this['in_sync'] = inSync;
        return this;
    }
    public set inSync(inSync: boolean  | undefined) {
        this['in_sync'] = inSync;
    }
    public get inSync(): boolean | undefined {
        return this['in_sync'];
    }
    public withSize(size: number): ShowInstanceTopicDetailRespReplicas {
        this['size'] = size;
        return this;
    }
    public withLag(lag: number): ShowInstanceTopicDetailRespReplicas {
        this['lag'] = lag;
        return this;
    }
}