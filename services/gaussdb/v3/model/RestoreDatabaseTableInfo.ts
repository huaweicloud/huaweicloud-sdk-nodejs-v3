

export class RestoreDatabaseTableInfo {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): RestoreDatabaseTableInfo {
        this['name'] = name;
        return this;
    }
}