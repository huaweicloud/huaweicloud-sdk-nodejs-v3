

export class ShowMessagesRequest {
    private 'instance_id': string | undefined;
    public topic: string;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public limit?: number;
    public offset?: number;
    public partition?: string;
    public constructor(instanceId?: any, topic?: any) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
    }
    public withInstanceId(instanceId: string): ShowMessagesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withTopic(topic: string): ShowMessagesRequest {
        this['topic'] = topic;
        return this;
    }
    public withStartTime(startTime: string): ShowMessagesRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowMessagesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withLimit(limit: number): ShowMessagesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowMessagesRequest {
        this['offset'] = offset;
        return this;
    }
    public withPartition(partition: string): ShowMessagesRequest {
        this['partition'] = partition;
        return this;
    }
}