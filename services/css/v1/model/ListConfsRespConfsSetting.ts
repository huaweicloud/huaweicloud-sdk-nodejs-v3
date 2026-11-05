

export class ListConfsRespConfsSetting {
    public workers?: number;
    public batchSize?: number;
    public batchDelayMs?: number;
    public queueType?: string;
    public queueCheckPointWrites?: number;
    public queueMaxBytesMb?: number;
    public constructor(queueType?: string) { 
        this['queueType'] = queueType;
    }
    public withWorkers(workers: number): ListConfsRespConfsSetting {
        this['workers'] = workers;
        return this;
    }
    public withBatchSize(batchSize: number): ListConfsRespConfsSetting {
        this['batchSize'] = batchSize;
        return this;
    }
    public withBatchDelayMs(batchDelayMs: number): ListConfsRespConfsSetting {
        this['batchDelayMs'] = batchDelayMs;
        return this;
    }
    public withQueueType(queueType: string): ListConfsRespConfsSetting {
        this['queueType'] = queueType;
        return this;
    }
    public withQueueCheckPointWrites(queueCheckPointWrites: number): ListConfsRespConfsSetting {
        this['queueCheckPointWrites'] = queueCheckPointWrites;
        return this;
    }
    public withQueueMaxBytesMb(queueMaxBytesMb: number): ListConfsRespConfsSetting {
        this['queueMaxBytesMb'] = queueMaxBytesMb;
        return this;
    }
}