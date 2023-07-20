

export class BinlogClearPolicyRequestBody {
    private 'binlog_retention_hours'?: number;
    public constructor(binlogRetentionHours?: number) { 
        this['binlog_retention_hours'] = binlogRetentionHours;
    }
    public withBinlogRetentionHours(binlogRetentionHours: number): BinlogClearPolicyRequestBody {
        this['binlog_retention_hours'] = binlogRetentionHours;
        return this;
    }
    public set binlogRetentionHours(binlogRetentionHours: number  | undefined) {
        this['binlog_retention_hours'] = binlogRetentionHours;
    }
    public get binlogRetentionHours(): number | undefined {
        return this['binlog_retention_hours'];
    }
}