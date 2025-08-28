

export class EngineGroupInfo {
    public id?: string;
    public name?: string;
    public version?: string;
    public constructor(id?: string, name?: string, version?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['version'] = version;
    }
    public withId(id: string): EngineGroupInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EngineGroupInfo {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): EngineGroupInfo {
        this['version'] = version;
        return this;
    }
}