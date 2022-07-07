

export class MasterEIPRequestSpecSpec {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): MasterEIPRequestSpecSpec {
        this['id'] = id;
        return this;
    }
}