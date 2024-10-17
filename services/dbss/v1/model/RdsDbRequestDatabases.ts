

export class RdsDbRequestDatabases {
    public id?: string;
    public type?: string;
    public constructor(id?: string, type?: string) { 
        this['id'] = id;
        this['type'] = type;
    }
    public withId(id: string): RdsDbRequestDatabases {
        this['id'] = id;
        return this;
    }
    public withType(type: string): RdsDbRequestDatabases {
        this['type'] = type;
        return this;
    }
}