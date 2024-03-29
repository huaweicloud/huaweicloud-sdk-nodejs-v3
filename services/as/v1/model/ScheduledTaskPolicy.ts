

export class ScheduledTaskPolicy {
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'launch_time'?: string;
    private 'recurrence_type'?: ScheduledTaskPolicyRecurrenceTypeEnum | string;
    private 'recurrence_value'?: string;
    public constructor(launchTime?: string) { 
        this['launch_time'] = launchTime;
    }
    public withStartTime(startTime: string): ScheduledTaskPolicy {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ScheduledTaskPolicy {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLaunchTime(launchTime: string): ScheduledTaskPolicy {
        this['launch_time'] = launchTime;
        return this;
    }
    public set launchTime(launchTime: string  | undefined) {
        this['launch_time'] = launchTime;
    }
    public get launchTime(): string | undefined {
        return this['launch_time'];
    }
    public withRecurrenceType(recurrenceType: ScheduledTaskPolicyRecurrenceTypeEnum | string): ScheduledTaskPolicy {
        this['recurrence_type'] = recurrenceType;
        return this;
    }
    public set recurrenceType(recurrenceType: ScheduledTaskPolicyRecurrenceTypeEnum | string  | undefined) {
        this['recurrence_type'] = recurrenceType;
    }
    public get recurrenceType(): ScheduledTaskPolicyRecurrenceTypeEnum | string | undefined {
        return this['recurrence_type'];
    }
    public withRecurrenceValue(recurrenceValue: string): ScheduledTaskPolicy {
        this['recurrence_value'] = recurrenceValue;
        return this;
    }
    public set recurrenceValue(recurrenceValue: string  | undefined) {
        this['recurrence_value'] = recurrenceValue;
    }
    public get recurrenceValue(): string | undefined {
        return this['recurrence_value'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScheduledTaskPolicyRecurrenceTypeEnum {
    DAILY = 'DAILY',
    WEEKLY = 'WEEKLY',
    MONTHLY = 'MONTHLY'
}
