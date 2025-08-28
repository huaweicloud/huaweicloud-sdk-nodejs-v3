
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlSwitchStatusResponse extends SdkResponse {
    public status?: string;
    private 'retention_days'?: number;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowSqlSwitchStatusResponse {
        this['status'] = status;
        return this;
    }
    public withRetentionDays(retentionDays: number): ShowSqlSwitchStatusResponse {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: number  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): number | undefined {
        return this['retention_days'];
    }
}