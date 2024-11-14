

export class AutoExportPolicy {
    public events?: Array<AutoExportPolicyEventsEnum> | Array<string>;
    public constructor() { 
    }
    public withEvents(events: Array<AutoExportPolicyEventsEnum> | Array<string>): AutoExportPolicy {
        this['events'] = events;
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
