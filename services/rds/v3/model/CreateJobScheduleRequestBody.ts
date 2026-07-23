import { JobScheduleDailyFrequencyInfo } from './JobScheduleDailyFrequencyInfo';
import { JobScheduleDurationInfo } from './JobScheduleDurationInfo';
import { JobScheduleFrequencyInfo } from './JobScheduleFrequencyInfo';
import { JobScheduleOneTimeOccurrenceInfo } from './JobScheduleOneTimeOccurrenceInfo';


export class CreateJobScheduleRequestBody {
    private 'schedule_type'?: string;
    private 'job_schedule_type'?: string;
    private 'one_time_occurrence'?: JobScheduleOneTimeOccurrenceInfo;
    public frequency?: JobScheduleFrequencyInfo;
    private 'daily_frequency'?: JobScheduleDailyFrequencyInfo;
    public duration?: JobScheduleDurationInfo;
    public constructor(scheduleType?: string) { 
        this['schedule_type'] = scheduleType;
    }
    public withScheduleType(scheduleType: string): CreateJobScheduleRequestBody {
        this['schedule_type'] = scheduleType;
        return this;
    }
    public set scheduleType(scheduleType: string  | undefined) {
        this['schedule_type'] = scheduleType;
    }
    public get scheduleType(): string | undefined {
        return this['schedule_type'];
    }
    public withJobScheduleType(jobScheduleType: string): CreateJobScheduleRequestBody {
        this['job_schedule_type'] = jobScheduleType;
        return this;
    }
    public set jobScheduleType(jobScheduleType: string  | undefined) {
        this['job_schedule_type'] = jobScheduleType;
    }
    public get jobScheduleType(): string | undefined {
        return this['job_schedule_type'];
    }
    public withOneTimeOccurrence(oneTimeOccurrence: JobScheduleOneTimeOccurrenceInfo): CreateJobScheduleRequestBody {
        this['one_time_occurrence'] = oneTimeOccurrence;
        return this;
    }
    public set oneTimeOccurrence(oneTimeOccurrence: JobScheduleOneTimeOccurrenceInfo  | undefined) {
        this['one_time_occurrence'] = oneTimeOccurrence;
    }
    public get oneTimeOccurrence(): JobScheduleOneTimeOccurrenceInfo | undefined {
        return this['one_time_occurrence'];
    }
    public withFrequency(frequency: JobScheduleFrequencyInfo): CreateJobScheduleRequestBody {
        this['frequency'] = frequency;
        return this;
    }
    public withDailyFrequency(dailyFrequency: JobScheduleDailyFrequencyInfo): CreateJobScheduleRequestBody {
        this['daily_frequency'] = dailyFrequency;
        return this;
    }
    public set dailyFrequency(dailyFrequency: JobScheduleDailyFrequencyInfo  | undefined) {
        this['daily_frequency'] = dailyFrequency;
    }
    public get dailyFrequency(): JobScheduleDailyFrequencyInfo | undefined {
        return this['daily_frequency'];
    }
    public withDuration(duration: JobScheduleDurationInfo): CreateJobScheduleRequestBody {
        this['duration'] = duration;
        return this;
    }
}