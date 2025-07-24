

export class AutoExportPolicy {
    public events?: Array<AutoExportPolicyEventsEnum> | Array<string>;
    public prefix?: string;
    public suffix?: string;
    public constructor() { 
    }
    public withEvents(events: Array<AutoExportPolicyEventsEnum> | Array<string>): AutoExportPolicy {
        this['events'] = events;
        return this;
    }
    public withPrefix(prefix: string): AutoExportPolicy {
        this['prefix'] = prefix;
        return this;
    }
    public withSuffix(suffix: string): AutoExportPolicy {
        this['suffix'] = suffix;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AutoExportPolicyEventsEnum {
    NEW = 'NEW',
    CHANGED = 'CHANGED',
    DELETED = 'DELETED'
}
