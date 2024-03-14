
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBinlogClearPolicyResponse extends SdkResponse {
    private 'binlog_retention_hours'?: number;
    private 'binlog_clear_type'?: string;
    public constructor() { 
        super();
    }
    public withBinlogRetentionHours(binlogRetentionHours: number): ShowBinlogClearPolicyResponse {
        this['binlog_retention_hours'] = binlogRetentionHours;
        return this;
    }
    public set binlogRetentionHours(binlogRetentionHours: number  | undefined) {
        this['binlog_retention_hours'] = binlogRetentionHours;
    }
    public get binlogRetentionHours(): number | undefined {
        return this['binlog_retention_hours'];
    }
    public withBinlogClearType(binlogClearType: string): ShowBinlogClearPolicyResponse {
        this['binlog_clear_type'] = binlogClearType;
        return this;
    }
    public set binlogClearType(binlogClearType: string  | undefined) {
        this['binlog_clear_type'] = binlogClearType;
    }
    public get binlogClearType(): string | undefined {
        return this['binlog_clear_type'];
    }
}