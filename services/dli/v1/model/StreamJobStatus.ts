

export class StreamJobStatus {
    private 'stream_id'?: number;
    private 'status_name'?: string;
    private 'status_desc'?: string;
    public constructor() { 
    }
    public withStreamId(streamId: number): StreamJobStatus {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: number  | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId(): number | undefined {
        return this['stream_id'];
    }
    public withStatusName(statusName: string): StreamJobStatus {
        this['status_name'] = statusName;
        return this;
    }
    public set statusName(statusName: string  | undefined) {
        this['status_name'] = statusName;
    }
    public get statusName(): string | undefined {
        return this['status_name'];
    }
    public withStatusDesc(statusDesc: string): StreamJobStatus {
        this['status_desc'] = statusDesc;
        return this;
    }
    public set statusDesc(statusDesc: string  | undefined) {
        this['status_desc'] = statusDesc;
    }
    public get statusDesc(): string | undefined {
        return this['status_desc'];
    }
}