

export class UpdateRecordSetsReq {
    public name: string;
    public description?: string;
    public type: string;
    public ttl?: number;
    public records?: Array<string>;
    public weight?: number;
    public constructor(name?: any, type?: any) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withName(name: string): UpdateRecordSetsReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateRecordSetsReq {
        this['description'] = description;
        return this;
    }
    public withType(type: string): UpdateRecordSetsReq {
        this['type'] = type;
        return this;
    }
    public withTtl(ttl: number): UpdateRecordSetsReq {
        this['ttl'] = ttl;
        return this;
    }
    public withRecords(records: Array<string>): UpdateRecordSetsReq {
        this['records'] = records;
        return this;
    }
    public withWeight(weight: number): UpdateRecordSetsReq {
        this['weight'] = weight;
        return this;
    }
}