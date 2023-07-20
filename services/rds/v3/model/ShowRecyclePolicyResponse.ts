
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRecyclePolicyResponse extends SdkResponse {
    private 'retention_period_in_days'?: number;
    public constructor() { 
        super();
    }
    public withRetentionPeriodInDays(retentionPeriodInDays: number): ShowRecyclePolicyResponse {
        this['retention_period_in_days'] = retentionPeriodInDays;
        return this;
    }
    public set retentionPeriodInDays(retentionPeriodInDays: number  | undefined) {
        this['retention_period_in_days'] = retentionPeriodInDays;
    }
    public get retentionPeriodInDays(): number | undefined {
        return this['retention_period_in_days'];
    }
}