

export class SqlserverDatabaseForCreation {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): SqlserverDatabaseForCreation {
        this['name'] = name;
        return this;
    }
}