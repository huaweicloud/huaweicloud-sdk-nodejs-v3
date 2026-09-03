import { BatchDeleteJobMetadata } from './BatchDeleteJobMetadata';


export class BatchDeleteJobItem {
    public kind?: string;
    public metadata?: BatchDeleteJobMetadata;
    public constructor(kind?: string, metadata?: BatchDeleteJobMetadata) { 
        this['kind'] = kind;
        this['metadata'] = metadata;
    }
    public withKind(kind: string): BatchDeleteJobItem {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: BatchDeleteJobMetadata): BatchDeleteJobItem {
        this['metadata'] = metadata;
        return this;
    }
}