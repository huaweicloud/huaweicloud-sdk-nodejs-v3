

export class MysqlEngineVersionInfo {
    public id?: string;
    public name?: string;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): MysqlEngineVersionInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MysqlEngineVersionInfo {
        this['name'] = name;
        return this;
    }
}