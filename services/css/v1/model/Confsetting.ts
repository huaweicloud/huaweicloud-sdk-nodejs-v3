

export class Confsetting {
    public workers?: number;
    public batchSize?: number;
    public batchDelayMs?: number;
    public queueType?: string;
    public queueCheckPointWrites?: number;
    public queueMaxBytesMb?: number;
    public constructor(queueType?: string) { 
        this['queueType'] = queueType;
    }
    public withWorkers(workers: number): Confsetting {
        this['workers'] = workers;
        return this;
    }
    public withBatchSize(batchSize: number): Confsetting {
        this['batchSize'] = batchSize;
        return this;
    }
    public withBatchDelayMs(batchDelayMs: number): Confsetting {
        this['batchDelayMs'] = batchDelayMs;
        return this;
    }
    public withQueueType(queueType: string): Confsetting {
        this['queueType'] = queueType;
        return this;
    }
    public withQueueCheckPointWrites(queueCheckPointWrites: number): Confsetting {
        this['queueCheckPointWrites'] = queueCheckPointWrites;
        return this;
    }
    public withQueueMaxBytesMb(queueMaxBytesMb: number): Confsetting {
        this['queueMaxBytesMb'] = queueMaxBytesMb;
        return this;
    }
}