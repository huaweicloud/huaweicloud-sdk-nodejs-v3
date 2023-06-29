

export class StatisticConferenceDataItem {
    public time?: string;
    public confCount?: string;
    public confDuration?: string;
    public attendeeCount?: string;
    public confConcurrentUsedCount?: string;
    public conf24hCount?: string;
    public conf24hAttendeeCount?: string;
    public constructor() { 
    }
    public withTime(time: string): StatisticConferenceDataItem {
        this['time'] = time;
        return this;
    }
    public withConfCount(confCount: string): StatisticConferenceDataItem {
        this['confCount'] = confCount;
        return this;
    }
    public withConfDuration(confDuration: string): StatisticConferenceDataItem {
        this['confDuration'] = confDuration;
        return this;
    }
    public withAttendeeCount(attendeeCount: string): StatisticConferenceDataItem {
        this['attendeeCount'] = attendeeCount;
        return this;
    }
    public withConfConcurrentUsedCount(confConcurrentUsedCount: string): StatisticConferenceDataItem {
        this['confConcurrentUsedCount'] = confConcurrentUsedCount;
        return this;
    }
    public withConf24hCount(conf24hCount: string): StatisticConferenceDataItem {
        this['conf24hCount'] = conf24hCount;
        return this;
    }
    public withConf24hAttendeeCount(conf24hAttendeeCount: string): StatisticConferenceDataItem {
        this['conf24hAttendeeCount'] = conf24hAttendeeCount;
        return this;
    }
}