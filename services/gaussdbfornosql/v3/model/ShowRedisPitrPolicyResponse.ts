
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRedisPitrPolicyResponse extends SdkResponse {
    public enabled?: boolean;
    public interval?: number;
    private 'keep_days'?: number;
    public constructor() { 
        super();
    }
    public withEnabled(enabled: boolean): ShowRedisPitrPolicyResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withInterval(interval: number): ShowRedisPitrPolicyResponse {
        this['interval'] = interval;
        return this;
    }
    public withKeepDays(keepDays: number): ShowRedisPitrPolicyResponse {
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