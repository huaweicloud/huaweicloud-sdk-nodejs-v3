

export class UpdateRecordSetReq {
    public name: string;
    public description?: string;
    public type: string;
    public ttl?: number;
    public records?: Array<string>;
    public constructor(name?: any, type?: any) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withName(name: string): UpdateRecordSetReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateRecordSetReq {
        this['description'] = description;
        return this;
    }
    public withType(type: string): UpdateRecordSetReq {
        this['type'] = type;
        return this;
    }
    public withTtl(ttl: number): UpdateRecordSetReq {
        this['ttl'] = ttl;
        return this;
    }
    public withRecords(records: Array<string>): UpdateRecordSetReq {
        this['records'] = records;
        return this;
    }
}