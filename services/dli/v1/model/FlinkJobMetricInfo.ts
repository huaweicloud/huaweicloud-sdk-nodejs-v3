

export class FlinkJobMetricInfo {
    public name?: string;
    public records?: number;
    private 'corrupted_records'?: number;
    public constructor() { 
    }
    public withName(name: string): FlinkJobMetricInfo {
        this['name'] = name;
        return this;
    }
    public withRecords(records: number): FlinkJobMetricInfo {
        this['records'] = records;
        return this;
    }
    public withCorruptedRecords(corruptedRecords: number): FlinkJobMetricInfo {
        this['corrupted_records'] = corruptedRecords;
        return this;
    }
    public set corruptedRecords(corruptedRecords: number  | undefined) {
        this['corrupted_records'] = corruptedRecords;
    }
    public get corruptedRecords(): number | undefined {
        return this['corrupted_records'];
    }
}