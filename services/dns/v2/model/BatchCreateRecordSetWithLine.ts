

export class BatchCreateRecordSetWithLine {
    public line: string;
    public ttl?: number;
    public weight?: number;
    public records: Array<string>;
    public constructor(line?: any, records?: any) { 
        this['line'] = line;
        this['records'] = records;
    }
    public withLine(line: string): BatchCreateRecordSetWithLine {
        this['line'] = line;
        return this;
    }
    public withTtl(ttl: number): BatchCreateRecordSetWithLine {
        this['ttl'] = ttl;
        return this;
    }
    public withWeight(weight: number): BatchCreateRecordSetWithLine {
        this['weight'] = weight;
        return this;
    }
    public withRecords(records: Array<string>): BatchCreateRecordSetWithLine {
        this['records'] = records;
        return this;
    }
}