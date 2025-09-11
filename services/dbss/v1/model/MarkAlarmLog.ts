

export class MarkAlarmLog {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): MarkAlarmLog {
        this['ids'] = ids;
        return this;
    }
}