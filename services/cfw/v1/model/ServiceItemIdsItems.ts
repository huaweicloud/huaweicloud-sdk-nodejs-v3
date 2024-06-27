

export class ServiceItemIdsItems {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): ServiceItemIdsItems {
        this['id'] = id;
        return this;
    }
}