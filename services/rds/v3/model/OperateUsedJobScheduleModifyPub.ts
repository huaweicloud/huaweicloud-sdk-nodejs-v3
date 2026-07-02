import { JobScheduleDailyFrequencyInfo } from './JobScheduleDailyFrequencyInfo';
import { JobScheduleDurationInfo } from './JobScheduleDurationInfo';
import { JobScheduleFrequencyInfo } from './JobScheduleFrequencyInfo';
import { JobScheduleOneTimeOccurrenceInfo } from './JobScheduleOneTimeOccurrenceInfo';


export class OperateUsedJobScheduleModifyPub {
    public id?: string;
    private 'job_schedule_type'?: string;
    private 'one_time_occurrence'?: JobScheduleOneTimeOccurrenceInfo;
    public frequency?: JobScheduleFrequencyInfo;
    private 'daily_frequency'?: JobScheduleDailyFrequencyInfo;
    public duration?: JobScheduleDurationInfo;
    public constructor(jobScheduleType?: string) { 
        this['job_schedule_type'] = jobScheduleType;
    }
    public withId(id: string): OperateUsedJobScheduleModifyPub {
        this['id'] = id;
        return this;
    }
    public withJobScheduleType(jobScheduleType: string): OperateUsedJobScheduleModifyPub {
        this['job_schedule_type'] = jobScheduleType;
        return this;
    }
    public set jobScheduleType(jobScheduleType: string  | undefined) {
        this['job_schedule_type'] = jobScheduleType;
    }
    public get jobScheduleType(): string | undefined {
        return this['job_schedule_type'];
    }
    public withOneTimeOccurrence(oneTimeOccurrence: JobScheduleOneTimeOccurrenceInfo): OperateUsedJobScheduleModifyPub {
        this['one_time_occurrence'] = oneTimeOccurrence;
        return this;
    }
    public set oneTimeOccurrence(oneTimeOccurrence: JobScheduleOneTimeOccurrenceInfo  | undefined) {
        this['one_time_occurrence'] = oneTimeOccurrence;
    }
    public get oneTimeOccurrence(): JobScheduleOneTimeOccurrenceInfo | undefined {
        return this['one_time_occurrence'];
    }
    public withFrequency(frequency: JobScheduleFrequencyInfo): OperateUsedJobScheduleModifyPub {
        this['frequency'] = frequency;
        return this;
    }
    public withDailyFrequency(dailyFrequency: JobScheduleDailyFrequencyInfo): OperateUsedJobScheduleModifyPub {
        this['daily_frequency'] = dailyFrequency;
        return this;
    }
    public set dailyFrequency(dailyFrequency: JobScheduleDailyFrequencyInfo  | undefined) {
        this['daily_frequency'] = dailyFrequency;
    }
    public get dailyFrequency(): JobScheduleDailyFrequencyInfo | undefined {
        return this['daily_frequency'];
    }
    public withDuration(duration: JobScheduleDurationInfo): OperateUsedJobScheduleModifyPub {
        this['duration'] = duration;
        return this;
    }
}