

export class CreateInstancePeriodRequestSecurityGroups {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): CreateInstancePeriodRequestSecurityGroups {
        this['id'] = id;
        return this;
    }
}