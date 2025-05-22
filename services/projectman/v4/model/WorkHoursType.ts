

export class WorkHoursType {
    public id?: number;
    public name?: string;
    public status?: number;
    public constructor() { 
    }
    public withId(id: number): WorkHoursType {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WorkHoursType {
        this['name'] = name;
        return this;
    }
    public withStatus(status: number): WorkHoursType {
        this['status'] = status;
        return this;
    }
}