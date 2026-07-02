import { JobScheduleDailyFrequencyInfo } from './JobScheduleDailyFrequencyInfo';
import { JobScheduleDurationInfo } from './JobScheduleDurationInfo';
import { JobScheduleFrequencyInfo } from './JobScheduleFrequencyInfo';
import { JobScheduleOneTimeOccurrenceInfo } from './JobScheduleOneTimeOccurrenceInfo';


export class OperateUsedJobScheduleModify {
    public id?: string;
    private 'job_schedule_type'?: string;
    private 'schedule_type'?: string;
    private 'user_defined'?: boolean;
    private 'one_time_occurrence'?: JobScheduleOneTimeOccurrenceInfo;
    public frequency?: JobScheduleFrequencyInfo;
    private 'daily_frequency'?: JobScheduleDailyFrequencyInfo;
    public duration?: JobScheduleDurationInfo;
    public constructor() { 
    }
    public withId(id: string): OperateUsedJobScheduleModify {
        this['id'] = id;
        return this;
    }
    public withJobScheduleType(jobScheduleType: string): OperateUsedJobScheduleModify {
        this['job_schedule_type'] = jobScheduleType;
        return this;
    }
    public set jobScheduleType(jobScheduleType: string  | undefined) {
        this['job_schedule_type'] = jobScheduleType;
    }
    public get jobScheduleType(): string | undefined {
        return this['job_schedule_type'];
    }
    public withScheduleType(scheduleType: string): OperateUsedJobScheduleModify {
        this['schedule_type'] = scheduleType;
        return this;
    }
    public set scheduleType(scheduleType: string  | undefined) {
        this['schedule_type'] = scheduleType;
    }
    public get scheduleType(): string | undefined {
        return this['schedule_type'];
    }
    public withUserDefined(userDefined: boolean): OperateUsedJobScheduleModify {
        this['user_defined'] = userDefined;
        return this;
    }
    public set userDefined(userDefined: boolean  | undefined) {
        this['user_defined'] = userDefined;
    }
    public get userDefined(): boolean | undefined {
        return this['user_defined'];
    }
    public withOneTimeOccurrence(oneTimeOccurrence: JobScheduleOneTimeOccurrenceInfo): OperateUsedJobScheduleModify {
        this['one_time_occurrence'] = oneTimeOccurrence;
        return this;
    }
    public set oneTimeOccurrence(oneTimeOccurrence: JobScheduleOneTimeOccurrenceInfo  | undefined) {
        this['one_time_occurrence'] = oneTimeOccurrence;
    }
    public get oneTimeOccurrence(): JobScheduleOneTimeOccurrenceInfo | undefined {
        return this['one_time_occurrence'];
    }
    public withFrequency(frequency: JobScheduleFrequencyInfo): OperateUsedJobScheduleModify {
        this['frequency'] = frequency;
        return this;
    }
    public withDailyFrequency(dailyFrequency: JobScheduleDailyFrequencyInfo): OperateUsedJobScheduleModify {
        this['daily_frequency'] = dailyFrequency;
        return this;
    }
    public set dailyFrequency(dailyFrequency: JobScheduleDailyFrequencyInfo  | undefined) {
        this['daily_frequency'] = dailyFrequency;
    }
    public get dailyFrequency(): JobScheduleDailyFrequencyInfo | undefined {
        return this['daily_frequency'];
    }
    public withDuration(duration: JobScheduleDurationInfo): OperateUsedJobScheduleModify {
        this['duration'] = duration;
        return this;
    }
}