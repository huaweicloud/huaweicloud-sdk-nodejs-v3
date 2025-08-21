

export class ReportProfileRespData {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ReportProfileRespData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ReportProfileRespData {
        this['name'] = name;
        return this;
    }
}