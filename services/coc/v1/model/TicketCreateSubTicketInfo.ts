

export class TicketCreateSubTicketInfo {
    private 'app_name'?: string;
    public region?: string;
    private 'target_type'?: string;
    private 'target_value'?: string;
    private 'expected_start_time'?: number;
    private 'expected_end_time'?: number;
    public executors?: string;
    public cooperators?: string;
    public constructor() { 
    }
    public withAppName(appName: string): TicketCreateSubTicketInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withRegion(region: string): TicketCreateSubTicketInfo {
        this['region'] = region;
        return this;
    }
    public withTargetType(targetType: string): TicketCreateSubTicketInfo {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withTargetValue(targetValue: string): TicketCreateSubTicketInfo {
        this['target_value'] = targetValue;
        return this;
    }
    public set targetValue(targetValue: string  | undefined) {
        this['target_value'] = targetValue;
    }
    public get targetValue(): string | undefined {
        return this['target_value'];
    }
    public withExpectedStartTime(expectedStartTime: number): TicketCreateSubTicketInfo {
        this['expected_start_time'] = expectedStartTime;
        return this;
    }
    public set expectedStartTime(expectedStartTime: number  | undefined) {
        this['expected_start_time'] = expectedStartTime;
    }
    public get expectedStartTime(): number | undefined {
        return this['expected_start_time'];
    }
    public withExpectedEndTime(expectedEndTime: number): TicketCreateSubTicketInfo {
        this['expected_end_time'] = expectedEndTime;
        return this;
    }
    public set expectedEndTime(expectedEndTime: number  | undefined) {
        this['expected_end_time'] = expectedEndTime;
    }
    public get expectedEndTime(): number | undefined {
        return this['expected_end_time'];
    }
    public withExecutors(executors: string): TicketCreateSubTicketInfo {
        this['executors'] = executors;
        return this;
    }
    public withCooperators(cooperators: string): TicketCreateSubTicketInfo {
        this['cooperators'] = cooperators;
        return this;
    }
}