

export class BatchCreatePublicRecordsetsTaskItem {
    private 'zone_name'?: string;
    public name?: string;
    public type?: string;
    public line?: string;
    public ttl?: number;
    public weight?: number;
    public records?: Array<string>;
    public status?: string;
    public constructor(zoneName?: string, type?: string, records?: Array<string>) { 
        this['zone_name'] = zoneName;
        this['type'] = type;
        this['records'] = records;
    }
    public withZoneName(zoneName: string): BatchCreatePublicRecordsetsTaskItem {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string  | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName(): string | undefined {
        return this['zone_name'];
    }
    public withName(name: string): BatchCreatePublicRecordsetsTaskItem {
        this['name'] = name;
        return this;
    }
    public withType(type: string): BatchCreatePublicRecordsetsTaskItem {
        this['type'] = type;
        return this;
    }
    public withLine(line: string): BatchCreatePublicRecordsetsTaskItem {
        this['line'] = line;
        return this;
    }
    public withTtl(ttl: number): BatchCreatePublicRecordsetsTaskItem {
        this['ttl'] = ttl;
        return this;
    }
    public withWeight(weight: number): BatchCreatePublicRecordsetsTaskItem {
        this['weight'] = weight;
        return this;
    }
    public withRecords(records: Array<string>): BatchCreatePublicRecordsetsTaskItem {
        this['records'] = records;
        return this;
    }
    public withStatus(status: string): BatchCreatePublicRecordsetsTaskItem {
        this['status'] = status;
        return this;
    }
}