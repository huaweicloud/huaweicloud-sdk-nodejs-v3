

export class CreateUsersDatabases {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateUsersDatabases {
        this['name'] = name;
        return this;
    }
}