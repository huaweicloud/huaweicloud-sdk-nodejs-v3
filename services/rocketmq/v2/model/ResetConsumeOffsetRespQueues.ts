

export class ResetConsumeOffsetRespQueues {
    private 'broker_name'?: string;
    private 'queue_id'?: number;
    private 'timestamp_offset'?: number;
    public constructor() { 
    }
    public withBrokerName(brokerName: string): ResetConsumeOffsetRespQueues {
        this['broker_name'] = brokerName;
        return this;
    }
    public set brokerName(brokerName: string  | undefined) {
        this['broker_name'] = brokerName;
    }
    public get brokerName(): string | undefined {
        return this['broker_name'];
    }
    public withQueueId(queueId: number): ResetConsumeOffsetRespQueues {
        this['queue_id'] = queueId;
        return this;
    }
    public set queueId(queueId: number  | undefined) {
        this['queue_id'] = queueId;
    }
    public get queueId(): number | undefined {
        return this['queue_id'];
    }
    public withTimestampOffset(timestampOffset: number): ResetConsumeOffsetRespQueues {
        this['timestamp_offset'] = timestampOffset;
        return this;
    }
    public set timestampOffset(timestampOffset: number  | undefined) {
        this['timestamp_offset'] = timestampOffset;
    }
    public get timestampOffset(): number | undefined {
        return this['timestamp_offset'];
    }
}