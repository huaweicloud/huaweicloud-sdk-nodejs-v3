

export class Event {
    private 'sample_time'?: string;
    public count?: number;
    private 'session_status'?: string;
    private 'wait_event_type'?: string;
    private 'wait_event_name'?: string;
    public constructor() { 
    }
    public withSampleTime(sampleTime: string): Event {
        this['sample_time'] = sampleTime;
        return this;
    }
    public set sampleTime(sampleTime: string  | undefined) {
        this['sample_time'] = sampleTime;
    }
    public get sampleTime(): string | undefined {
        return this['sample_time'];
    }
    public withCount(count: number): Event {
        this['count'] = count;
        return this;
    }
    public withSessionStatus(sessionStatus: string): Event {
        this['session_status'] = sessionStatus;
        return this;
    }
    public set sessionStatus(sessionStatus: string  | undefined) {
        this['session_status'] = sessionStatus;
    }
    public get sessionStatus(): string | undefined {
        return this['session_status'];
    }
    public withWaitEventType(waitEventType: string): Event {
        this['wait_event_type'] = waitEventType;
        return this;
    }
    public set waitEventType(waitEventType: string  | undefined) {
        this['wait_event_type'] = waitEventType;
    }
    public get waitEventType(): string | undefined {
        return this['wait_event_type'];
    }
    public withWaitEventName(waitEventName: string): Event {
        this['wait_event_name'] = waitEventName;
        return this;
    }
    public set waitEventName(waitEventName: string  | undefined) {
        this['wait_event_name'] = waitEventName;
    }
    public get waitEventName(): string | undefined {
        return this['wait_event_name'];
    }
}