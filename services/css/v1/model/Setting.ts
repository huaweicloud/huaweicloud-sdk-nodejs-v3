

export class Setting {
    public workers?: number;
    private 'batch_size'?: number;
    private 'batch_delay_ms'?: number;
    private 'queue_type'?: string;
    private 'queue_check_point_writes'?: number;
    private 'queue_max_bytes_mb'?: number;
    public constructor(queueType?: string) { 
        this['queue_type'] = queueType;
    }
    public withWorkers(workers: number): Setting {
        this['workers'] = workers;
        return this;
    }
    public withBatchSize(batchSize: number): Setting {
        this['batch_size'] = batchSize;
        return this;
    }
    public set batchSize(batchSize: number  | undefined) {
        this['batch_size'] = batchSize;
    }
    public get batchSize(): number | undefined {
        return this['batch_size'];
    }
    public withBatchDelayMs(batchDelayMs: number): Setting {
        this['batch_delay_ms'] = batchDelayMs;
        return this;
    }
    public set batchDelayMs(batchDelayMs: number  | undefined) {
        this['batch_delay_ms'] = batchDelayMs;
    }
    public get batchDelayMs(): number | undefined {
        return this['batch_delay_ms'];
    }
    public withQueueType(queueType: string): Setting {
        this['queue_type'] = queueType;
        return this;
    }
    public set queueType(queueType: string  | undefined) {
        this['queue_type'] = queueType;
    }
    public get queueType(): string | undefined {
        return this['queue_type'];
    }
    public withQueueCheckPointWrites(queueCheckPointWrites: number): Setting {
        this['queue_check_point_writes'] = queueCheckPointWrites;
        return this;
    }
    public set queueCheckPointWrites(queueCheckPointWrites: number  | undefined) {
        this['queue_check_point_writes'] = queueCheckPointWrites;
    }
    public get queueCheckPointWrites(): number | undefined {
        return this['queue_check_point_writes'];
    }
    public withQueueMaxBytesMb(queueMaxBytesMb: number): Setting {
        this['queue_max_bytes_mb'] = queueMaxBytesMb;
        return this;
    }
    public set queueMaxBytesMb(queueMaxBytesMb: number  | undefined) {
        this['queue_max_bytes_mb'] = queueMaxBytesMb;
    }
    public get queueMaxBytesMb(): number | undefined {
        return this['queue_max_bytes_mb'];
    }
}