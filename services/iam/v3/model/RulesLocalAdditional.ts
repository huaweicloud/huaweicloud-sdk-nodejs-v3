

export class RulesLocalAdditional {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): RulesLocalAdditional {
        this['name'] = name;
        return this;
    }
}