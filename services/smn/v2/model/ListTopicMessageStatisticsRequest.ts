

export class ListTopicMessageStatisticsRequest {
    private 'topic_urn'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(topicUrn?: string, startTime?: string, endTime?: string) { 
        this['topic_urn'] = topicUrn;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withTopicUrn(topicUrn: string): ListTopicMessageStatisticsRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withStartTime(startTime: string): ListTopicMessageStatisticsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListTopicMessageStatisticsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}