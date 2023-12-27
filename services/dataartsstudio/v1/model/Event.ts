

export class Event {
    private 'event_type'?: EventEventTypeEnum | string;
    public channel?: string;
    private 'fail_policy'?: EventFailPolicyEnum | string;
    public concurrent?: number;
    private 'read_policy'?: EventReadPolicyEnum | string;
    public constructor(eventType?: string, channel?: string) { 
        this['event_type'] = eventType;
        this['channel'] = channel;
    }
    public withEventType(eventType: EventEventTypeEnum | string): Event {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: EventEventTypeEnum | string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): EventEventTypeEnum | string | undefined {
        return this['event_type'];
    }
    public withChannel(channel: string): Event {
        this['channel'] = channel;
        return this;
    }
    public withFailPolicy(failPolicy: EventFailPolicyEnum | string): Event {
        this['fail_policy'] = failPolicy;
        return this;
    }
    public set failPolicy(failPolicy: EventFailPolicyEnum | string  | undefined) {
        this['fail_policy'] = failPolicy;
    }
    public get failPolicy(): EventFailPolicyEnum | string | undefined {
        return this['fail_policy'];
    }
    public withConcurrent(concurrent: number): Event {
        this['concurrent'] = concurrent;
        return this;
    }
    public withReadPolicy(readPolicy: EventReadPolicyEnum | string): Event {
        this['read_policy'] = readPolicy;
        return this;
    }
    public set readPolicy(readPolicy: EventReadPolicyEnum | string  | undefined) {
        this['read_policy'] = readPolicy;
    }
    public get readPolicy(): EventReadPolicyEnum | string | undefined {
        return this['read_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EventEventTypeEnum {
    KAFKA = 'KAFKA',
    DIS = 'DIS',
    OBS = 'OBS'
}
/**
    * @export
    * @enum {string}
    */
export enum EventFailPolicyEnum {
    SUSPEND = 'SUSPEND',
    IGNORE = 'IGNORE'
}
/**
    * @export
    * @enum {string}
    */
export enum EventReadPolicyEnum {
    LAST = 'LAST',
    NEW = 'NEW'
}
