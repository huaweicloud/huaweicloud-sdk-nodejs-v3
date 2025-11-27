

export class CreateRecordSetRequestBody {
    public name?: string;
    public ttl?: number;
    public records?: Array<string>;
    public line?: string;
    public weight?: number;
    public type?: string;
    public constructor(name?: string, ttl?: number, line?: string) { 
        this['name'] = name;
        this['ttl'] = ttl;
        this['line'] = line;
    }
    public withName(name: string): CreateRecordSetRequestBody {
        this['name'] = name;
        return this;
    }
    public withTtl(ttl: number): CreateRecordSetRequestBody {
        this['ttl'] = ttl;
        return this;
    }
    public withRecords(records: Array<string>): CreateRecordSetRequestBody {
        this['records'] = records;
        return this;
    }
    public withLine(line: string): CreateRecordSetRequestBody {
        this['line'] = line;
        return this;
    }
    public withWeight(weight: number): CreateRecordSetRequestBody {
        this['weight'] = weight;
        return this;
    }
    public withType(type: string): CreateRecordSetRequestBody {
        this['type'] = type;
        return this;
    }
}