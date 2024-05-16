

export class StarRocksCreateRequestEngine {
    public type?: string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): StarRocksCreateRequestEngine {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): StarRocksCreateRequestEngine {
        this['version'] = version;
        return this;
    }
}