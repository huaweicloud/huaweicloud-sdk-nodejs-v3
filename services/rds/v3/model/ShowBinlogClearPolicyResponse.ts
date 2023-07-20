
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBinlogClearPolicyResponse extends SdkResponse {
    private 'binlog_retention_hours'?: number;
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
}