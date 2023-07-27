

export class ServerOsSchedulerHints {
    public group?: Array<string>;
    public constructor() { 
    }
    public withGroup(group: Array<string>): ServerOsSchedulerHints {
        this['group'] = group;
        return this;
    }
}