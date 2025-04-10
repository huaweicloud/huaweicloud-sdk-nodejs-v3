

export class TableProposers {
    public id?: string;
    public name?: string;
    public type?: number;
    public constructor() { 
    }
    public withId(id: string): TableProposers {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TableProposers {
        this['name'] = name;
        return this;
    }
    public withType(type: number): TableProposers {
        this['type'] = type;
        return this;
    }
}