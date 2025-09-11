

export class SchedulerConfigBase {
    private 'db_ids'?: string;
    public format?: SchedulerConfigBaseFormatEnum | string;
    public frequency?: SchedulerConfigBaseFrequencyEnum | string;
    public id?: string;
    public mode?: SchedulerConfigBaseModeEnum | string;
    public notice?: SchedulerConfigBaseNoticeEnum | string;
    private 'start_time'?: string;
    public status?: SchedulerConfigBaseStatusEnum | string;
    private 'topic_urn'?: string;
    public constructor() { 
    }
    public withDbIds(dbIds: string): SchedulerConfigBase {
        this['db_ids'] = dbIds;
        return this;
    }
    public set dbIds(dbIds: string  | undefined) {
        this['db_ids'] = dbIds;
    }
    public get dbIds(): string | undefined {
        return this['db_ids'];
    }
    public withFormat(format: SchedulerConfigBaseFormatEnum | string): SchedulerConfigBase {
        this['format'] = format;
        return this;
    }
    public withFrequency(frequency: SchedulerConfigBaseFrequencyEnum | string): SchedulerConfigBase {
        this['frequency'] = frequency;
        return this;
    }
    public withId(id: string): SchedulerConfigBase {
        this['id'] = id;
        return this;
    }
    public withMode(mode: SchedulerConfigBaseModeEnum | string): SchedulerConfigBase {
        this['mode'] = mode;
        return this;
    }
    public withNotice(notice: SchedulerConfigBaseNoticeEnum | string): SchedulerConfigBase {
        this['notice'] = notice;
        return this;
    }
    public withStartTime(startTime: string): SchedulerConfigBase {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withStatus(status: SchedulerConfigBaseStatusEnum | string): SchedulerConfigBase {
        this['status'] = status;
        return this;
    }
    public withTopicUrn(topicUrn: string): SchedulerConfigBase {
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

/**
    * @export
    * @enum {string}
    */
export enum SchedulerConfigBaseFormatEnum {
    PDF = 'PDF',
    ZIP = 'ZIP'
}
/**
    * @export
    * @enum {string}
    */
export enum SchedulerConfigBaseFrequencyEnum {
    AUDIT_REPORT_DAY = 'AUDIT_REPORT_DAY',
    AUDIT_REPORT_WEEK = 'AUDIT_REPORT_WEEK',
    AUDIT_REPORT_MONTH = 'AUDIT_REPORT_MONTH',
    AUDIT_REPORT_YEAR = 'AUDIT_REPORT_YEAR',
    AUDIT_REPORT_REAL_TIME = 'AUDIT_REPORT_REAL_TIME'
}
/**
    * @export
    * @enum {string}
    */
export enum SchedulerConfigBaseModeEnum {
    ONCE = 'ONCE',
    CYCLE = 'CYCLE'
}
/**
    * @export
    * @enum {string}
    */
export enum SchedulerConfigBaseNoticeEnum {
    OFF = 'OFF',
    ON = 'ON'
}
/**
    * @export
    * @enum {string}
    */
export enum SchedulerConfigBaseStatusEnum {
    OFF = 'OFF',
    ON = 'ON'
}
