

export class CreateDatabaseDetailResponses {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateDatabaseDetailResponses {
        this['name'] = name;
        return this;
    }
}