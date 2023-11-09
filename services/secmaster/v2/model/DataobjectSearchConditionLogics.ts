

export class DataobjectSearchConditionLogics {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): DataobjectSearchConditionLogics {
        this['name'] = name;
        return this;
    }
}