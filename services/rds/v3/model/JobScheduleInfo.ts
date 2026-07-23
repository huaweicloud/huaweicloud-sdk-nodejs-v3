import { JobScheduleDailyFrequencyInfo } from './JobScheduleDailyFrequencyInfo';
import { JobScheduleDurationInfo } from './JobScheduleDurationInfo';
import { JobScheduleFrequencyInfo } from './JobScheduleFrequencyInfo';
import { JobScheduleOneTimeOccurrenceInfo } from './JobScheduleOneTimeOccurrenceInfo';


export class JobScheduleInfo {
    public id?: string;
    private 'user_defined'?: boolean;
    private 'schedule_type'?: string;
    private 'job_schedule_type'?: string;
    private 'one_time_occurrence'?: JobScheduleOneTimeOccurrenceInfo;
    public frequency?: JobScheduleFrequencyInfo;
    private 'daily_frequency'?: JobScheduleDailyFrequencyInfo;
    public duration?: JobScheduleDurationInfo;
    public constructor(id?: string, userDefined?: boolean, scheduleType?: string, frequency?: JobScheduleFrequencyInfo, dailyFrequency?: JobScheduleDailyFrequencyInfo, duration?: JobScheduleDurationInfo) { 
        this['id'] = id;
        this['user_defined'] = userDefined;
        this['schedule_type'] = scheduleType;
        this['frequency'] = frequency;
        this['daily_frequency'] = dailyFrequency;
        this['duration'] = duration;
    }
    public withId(id: string): JobScheduleInfo {
        this['id'] = id;
        return this;
    }
    public withUserDefined(userDefined: boolean): JobScheduleInfo {
        this['user_defined'] = userDefined;
        return this;
    }
    public set userDefined(userDefined: boolean  | undefined) {
        this['user_defined'] = userDefined;
    }
    public get userDefined(): boolean | undefined {
        return this['user_defined'];
    }
    public withScheduleType(scheduleType: string): JobScheduleInfo {
        this['schedule_type'] = scheduleType;
        return this;
    }
    public set scheduleType(scheduleType: string  | undefined) {
        this['schedule_type'] = scheduleType;
    }
    public get scheduleType(): string | undefined {
        return this['schedule_type'];
    }
    public withJobScheduleType(jobScheduleType: string): JobScheduleInfo {
        this['job_schedule_type'] = jobScheduleType;
        return this;
    }
    public set jobScheduleType(jobScheduleType: string  | undefined) {
        this['job_schedule_type'] = jobScheduleType;
    }
    public get jobScheduleType(): string | undefined {
        return this['job_schedule_type'];
    }
    public withOneTimeOccurrence(oneTimeOccurrence: JobScheduleOneTimeOccurrenceInfo): JobScheduleInfo {
        this['one_time_occurrence'] = oneTimeOccurrence;
        return this;
    }
    public set oneTimeOccurrence(oneTimeOccurrence: JobScheduleOneTimeOccurrenceInfo  | undefined) {
        this['one_time_occurrence'] = oneTimeOccurrence;
    }
    public get oneTimeOccurrence(): JobScheduleOneTimeOccurrenceInfo | undefined {
        return this['one_time_occurrence'];
    }
    public withFrequency(frequency: JobScheduleFrequencyInfo): JobScheduleInfo {
        this['frequency'] = frequency;
        return this;
    }
    public withDailyFrequency(dailyFrequency: JobScheduleDailyFrequencyInfo): JobScheduleInfo {
        this['daily_frequency'] = dailyFrequency;
        return this;
    }
    public set dailyFrequency(dailyFrequency: JobScheduleDailyFrequencyInfo  | undefined) {
        this['daily_frequency'] = dailyFrequency;
    }
    public get dailyFrequency(): JobScheduleDailyFrequencyInfo | undefined {
        return this['daily_frequency'];
    }
    public withDuration(duration: JobScheduleDurationInfo): JobScheduleInfo {
        this['duration'] = duration;
        return this;
    }
}