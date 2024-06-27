

export class ClickHouseEngineInfo {
    public type?: string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): ClickHouseEngineInfo {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ClickHouseEngineInfo {
        this['version'] = version;
        return this;
    }
}