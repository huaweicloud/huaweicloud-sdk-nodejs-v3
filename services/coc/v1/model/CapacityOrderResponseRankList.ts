

export class CapacityOrderResponseRankList {
    public id?: string;
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withId(id: string): CapacityOrderResponseRankList {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CapacityOrderResponseRankList {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): CapacityOrderResponseRankList {
        this['value'] = value;
        return this;
    }
}