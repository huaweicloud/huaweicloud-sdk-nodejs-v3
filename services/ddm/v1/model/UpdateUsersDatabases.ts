

export class UpdateUsersDatabases {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateUsersDatabases {
        this['name'] = name;
        return this;
    }
}