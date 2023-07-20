
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobSuccessRatioResponse extends SdkResponse {
    private 'success_count'?: number;
    private 'total_count'?: number;
    private 'success_ratio'?: number;
    public constructor() { 
        super();
    }
    public withSuccessCount(successCount: number): ShowJobSuccessRatioResponse {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withTotalCount(totalCount: number): ShowJobSuccessRatioResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withSuccessRatio(successRatio: number): ShowJobSuccessRatioResponse {
        this['success_ratio'] = successRatio;
        return this;
    }
    public set successRatio(successRatio: number  | undefined) {
        this['success_ratio'] = successRatio;
    }
    public get successRatio(): number | undefined {
        return this['success_ratio'];
    }
}