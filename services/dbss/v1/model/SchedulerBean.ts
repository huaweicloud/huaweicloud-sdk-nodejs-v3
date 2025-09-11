

export class SchedulerBean {
    private 'db_ids'?: string;
    public format?: string;
    public frequency?: string;
    public id?: string;
    public mode?: string;
    public notice?: string;
    private 'start_time'?: string;
    public status?: string;
    private 'topic_urn'?: string;
    public constructor(format?: string, frequency?: string, id?: string, mode?: string, notice?: string, startTime?: string, status?: string, topicUrn?: string) { 
        this['format'] = format;
        this['frequency'] = frequency;
        this['id'] = id;
        this['mode'] = mode;
        this['notice'] = notice;
        this['start_time'] = startTime;
        this['status'] = status;
        this['topic_urn'] = topicUrn;
    }
    public withDbIds(dbIds: string): SchedulerBean {
        this['db_ids'] = dbIds;
        return this;
    }
    public set dbIds(dbIds: string  | undefined) {
        this['db_ids'] = dbIds;
    }
    public get dbIds(): string | undefined {
        return this['db_ids'];
    }
    public withFormat(format: string): SchedulerBean {
        this['format'] = format;
        return this;
    }
    public withFrequency(frequency: string): SchedulerBean {
        this['frequency'] = frequency;
        return this;
    }
    public withId(id: string): SchedulerBean {
        this['id'] = id;
        return this;
    }
    public withMode(mode: string): SchedulerBean {
        this['mode'] = mode;
        return this;
    }
    public withNotice(notice: string): SchedulerBean {
        this['notice'] = notice;
        return this;
    }
    public withStartTime(startTime: string): SchedulerBean {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withStatus(status: string): SchedulerBean {
        this['status'] = status;
        return this;
    }
    public withTopicUrn(topicUrn: string): SchedulerBean {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
}