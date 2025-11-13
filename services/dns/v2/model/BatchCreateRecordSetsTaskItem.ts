

export class BatchCreateRecordSetsTaskItem {
    public name?: string;
    public type?: string;
    public line?: string;
    public ttl?: number;
    public weight?: number;
    public records?: Array<string>;
    public status?: string;
    public description?: string;
    public constructor(type?: string, records?: Array<string>) { 
        this['type'] = type;
        this['records'] = records;
    }
    public withName(name: string): BatchCreateRecordSetsTaskItem {
        this['name'] = name;
        return this;
    }
    public withType(type: string): BatchCreateRecordSetsTaskItem {
        this['type'] = type;
        return this;
    }
    public withLine(line: string): BatchCreateRecordSetsTaskItem {
        this['line'] = line;
        return this;
    }
    public withTtl(ttl: number): BatchCreateRecordSetsTaskItem {
        this['ttl'] = ttl;
        return this;
    }
    public withWeight(weight: number): BatchCreateRecordSetsTaskItem {
        this['weight'] = weight;
        return this;
    }
    public withRecords(records: Array<string>): BatchCreateRecordSetsTaskItem {
        this['records'] = records;
        return this;
    }
    public withStatus(status: string): BatchCreateRecordSetsTaskItem {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): BatchCreateRecordSetsTaskItem {
        this['description'] = description;
        return this;
    }
}