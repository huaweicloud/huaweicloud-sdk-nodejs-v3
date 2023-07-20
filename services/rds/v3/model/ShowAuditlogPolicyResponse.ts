
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuditlogPolicyResponse extends SdkResponse {
    private 'keep_days'?: number;
    public constructor() { 
        super();
    }
    public withKeepDays(keepDays: number): ShowAuditlogPolicyResponse {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
}