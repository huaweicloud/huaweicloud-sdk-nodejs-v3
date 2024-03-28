

export class ShowSparkJobLogRequest {
    private 'batch_id'?: string;
    public from?: number;
    public index?: number;
    public size?: number;
    public type?: string;
    public constructor(batchId?: string) { 
        this['batch_id'] = batchId;
    }
    public withBatchId(batchId: string): ShowSparkJobLogRequest {
        this['batch_id'] = batchId;
        return this;
    }
    public set batchId(batchId: string  | undefined) {
        this['batch_id'] = batchId;
    }
    public get batchId(): string | undefined {
        return this['batch_id'];
    }
    public withFrom(from: number): ShowSparkJobLogRequest {
        this['from'] = from;
        return this;
    }
    public withIndex(index: number): ShowSparkJobLogRequest {
        this['index'] = index;
        return this;
    }
    public withSize(size: number): ShowSparkJobLogRequest {
        this['size'] = size;
        return this;
    }
    public withType(type: string): ShowSparkJobLogRequest {
        this['type'] = type;
        return this;
    }
}