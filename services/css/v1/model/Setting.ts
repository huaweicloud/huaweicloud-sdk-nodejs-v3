

export class Setting {
    public workers?: number;
    public batchSize?: number;
    public batchDelayMs?: number;
    public queueType?: string;
    public queueCheckPointWrites?: number;
    public queueMaxBytesMb?: number;
    public constructor(queueType?: string) { 
        this['queueType'] = queueType;
    }
    public withWorkers(workers: number): Setting {
        this['workers'] = workers;
        return this;
    }
    public withBatchSize(batchSize: number): Setting {
        this['batchSize'] = batchSize;
        return this;
    }
    public withBatchDelayMs(batchDelayMs: number): Setting {
        this['batchDelayMs'] = batchDelayMs;
        return this;
    }
    public withQueueType(queueType: string): Setting {
        this['queueType'] = queueType;
        return this;
    }
    public withQueueCheckPointWrites(queueCheckPointWrites: number): Setting {
        this['queueCheckPointWrites'] = queueCheckPointWrites;
        return this;
    }
    public withQueueMaxBytesMb(queueMaxBytesMb: number): Setting {
        this['queueMaxBytesMb'] = queueMaxBytesMb;
        return this;
    }
}