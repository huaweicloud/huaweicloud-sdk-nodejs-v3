

export class ShowBatchLogRequest {
    private 'batch_id'?: string;
    public from?: number;
    public index?: number;
    public size?: number;
    public type?: string;
    public constructor(batchId?: string) { 
        this['batch_id'] = batchId;
    }
    public withBatchId(batchId: string): ShowBatchLogRequest {
        this['batch_id'] = batchId;
        return this;
    }
    public set batchId(batchId: string  | undefined) {
        this['batch_id'] = batchId;
    }
    public get batchId(): string | undefined {
        return this['batch_id'];
    }
    public withFrom(from: number): ShowBatchLogRequest {
        this['from'] = from;
        return this;
    }
    public withIndex(index: number): ShowBatchLogRequest {
        this['index'] = index;
        return this;
    }
    public withSize(size: number): ShowBatchLogRequest {
        this['size'] = size;
        return this;
    }
    public withType(type: string): ShowBatchLogRequest {
        this['type'] = type;
        return this;
    }
}