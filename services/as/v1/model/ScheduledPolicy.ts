

export class ScheduledPolicy {
    private 'launch_time'?: string;
    private 'recurrence_type'?: ScheduledPolicyRecurrenceTypeEnum | string;
    private 'recurrence_value'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(launchTime?: string) { 
        this['launch_time'] = launchTime;
    }
    public withLaunchTime(launchTime: string): ScheduledPolicy {
        this['launch_time'] = launchTime;
        return this;
    }
    public set launchTime(launchTime: string  | undefined) {
        this['launch_time'] = launchTime;
    }
    public get launchTime(): string | undefined {
        return this['launch_time'];
    }
    public withRecurrenceType(recurrenceType: ScheduledPolicyRecurrenceTypeEnum | string): ScheduledPolicy {
        this['recurrence_type'] = recurrenceType;
        return this;
    }
    public set recurrenceType(recurrenceType: ScheduledPolicyRecurrenceTypeEnum | string  | undefined) {
        this['recurrence_type'] = recurrenceType;
    }
    public get recurrenceType(): ScheduledPolicyRecurrenceTypeEnum | string | undefined {
        return this['recurrence_type'];
    }
    public withRecurrenceValue(recurrenceValue: string): ScheduledPolicy {
        this['recurrence_value'] = recurrenceValue;
        return this;
    }
    public set recurrenceValue(recurrenceValue: string  | undefined) {
        this['recurrence_value'] = recurrenceValue;
    }
    public get recurrenceValue(): string | undefined {
        return this['recurrence_value'];
    }
    public withStartTime(startTime: string): ScheduledPolicy {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ScheduledPolicy {
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

/**
    * @export
    * @enum {string}
    */
export enum ScheduledPolicyRecurrenceTypeEnum {
    DAILY = 'Daily',
    WEEKLY = 'Weekly',
    MONTHLY = 'Monthly'
}
