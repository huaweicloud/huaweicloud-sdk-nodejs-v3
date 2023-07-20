
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRecyclePolicyResponse extends SdkResponse {
    private 'retention_period_in_days'?: string;
    public constructor() { 
        super();
    }
    public withRetentionPeriodInDays(retentionPeriodInDays: string): ShowRecyclePolicyResponse {
        this['retention_period_in_days'] = retentionPeriodInDays;
        return this;
    }
    public set retentionPeriodInDays(retentionPeriodInDays: string  | undefined) {
        this['retention_period_in_days'] = retentionPeriodInDays;
    }
    public get retentionPeriodInDays(): string | undefined {
        return this['retention_period_in_days'];
    }
}