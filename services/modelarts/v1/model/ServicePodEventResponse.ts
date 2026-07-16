

export class ServicePodEventResponse {
    public count?: number;
    private 'first_timestamp'?: Date;
    private 'last_timestamp'?: Date;
    public message?: string;
    public reason?: string;
    private 'reporting_component'?: string;
    public type?: string;
    public constructor(count?: number, firstTimestamp?: Date, lastTimestamp?: Date, message?: string, reason?: string, reportingComponent?: string, type?: string) { 
        this['count'] = count;
        this['first_timestamp'] = firstTimestamp;
        this['last_timestamp'] = lastTimestamp;
        this['message'] = message;
        this['reason'] = reason;
        this['reporting_component'] = reportingComponent;
        this['type'] = type;
    }
    public withCount(count: number): ServicePodEventResponse {
        this['count'] = count;
        return this;
    }
    public withFirstTimestamp(firstTimestamp: Date): ServicePodEventResponse {
        this['first_timestamp'] = firstTimestamp;
        return this;
    }
    public set firstTimestamp(firstTimestamp: Date  | undefined) {
        this['first_timestamp'] = firstTimestamp;
    }
    public get firstTimestamp(): Date | undefined {
        return this['first_timestamp'];
    }
    public withLastTimestamp(lastTimestamp: Date): ServicePodEventResponse {
        this['last_timestamp'] = lastTimestamp;
        return this;
    }
    public set lastTimestamp(lastTimestamp: Date  | undefined) {
        this['last_timestamp'] = lastTimestamp;
    }
    public get lastTimestamp(): Date | undefined {
        return this['last_timestamp'];
    }
    public withMessage(message: string): ServicePodEventResponse {
        this['message'] = message;
        return this;
    }
    public withReason(reason: string): ServicePodEventResponse {
        this['reason'] = reason;
        return this;
    }
    public withReportingComponent(reportingComponent: string): ServicePodEventResponse {
        this['reporting_component'] = reportingComponent;
        return this;
    }
    public set reportingComponent(reportingComponent: string  | undefined) {
        this['reporting_component'] = reportingComponent;
    }
    public get reportingComponent(): string | undefined {
        return this['reporting_component'];
    }
    public withType(type: string): ServicePodEventResponse {
        this['type'] = type;
        return this;
    }
}