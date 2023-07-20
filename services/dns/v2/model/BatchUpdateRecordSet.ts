

export class BatchUpdateRecordSet {
    public id?: string;
    public description?: string;
    public ttl?: number;
    public weight?: number;
    public records?: Array<string>;
    public constructor(id?: string, records?: Array<string>) { 
        this['id'] = id;
        this['records'] = records;
    }
    public withId(id: string): BatchUpdateRecordSet {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): BatchUpdateRecordSet {
        this['description'] = description;
        return this;
    }
    public withTtl(ttl: number): BatchUpdateRecordSet {
        this['ttl'] = ttl;
        return this;
    }
    public withWeight(weight: number): BatchUpdateRecordSet {
        this['weight'] = weight;
        return this;
    }
    public withRecords(records: Array<string>): BatchUpdateRecordSet {
        this['records'] = records;
        return this;
    }
}