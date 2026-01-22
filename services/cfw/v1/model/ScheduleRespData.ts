

export class ScheduleRespData {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ScheduleRespData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ScheduleRespData {
        this['name'] = name;
        return this;
    }
}