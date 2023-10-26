

export class EventSeries {
    private 'event_severity'?: EventSeriesEventSeverityEnum | string;
    public values?: Array<number>;
    public constructor() { 
    }
    public withEventSeverity(eventSeverity: EventSeriesEventSeverityEnum | string): EventSeries {
        this['event_severity'] = eventSeverity;
        return this;
    }
    public set eventSeverity(eventSeverity: EventSeriesEventSeverityEnum | string  | undefined) {
        this['event_severity'] = eventSeverity;
    }
    public get eventSeverity(): EventSeriesEventSeverityEnum | string | undefined {
        return this['event_severity'];
    }
    public withValues(values: Array<number>): EventSeries {
        this['values'] = values;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EventSeriesEventSeverityEnum {
    CRITICAL = 'Critical',
    MAJOR = 'Major',
    MINOR = 'Minor',
    INFO = 'Info'
}
