
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGrowthRateResponse extends SdkResponse {
    private 'growth_rate'?: number;
    public constructor() { 
        super();
    }
    public withGrowthRate(growthRate: number): ShowGrowthRateResponse {
        this['growth_rate'] = growthRate;
        return this;
    }
    public set growthRate(growthRate: number  | undefined) {
        this['growth_rate'] = growthRate;
    }
    public get growthRate(): number | undefined {
        return this['growth_rate'];
    }
}