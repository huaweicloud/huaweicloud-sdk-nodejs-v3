
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckClusterShrinkResponse extends SdkResponse {
    private 'is_passed'?: boolean;
    public constructor() { 
        super();
    }
    public withIsPassed(isPassed: boolean): CheckClusterShrinkResponse {
        this['is_passed'] = isPassed;
        return this;
    }
    public set isPassed(isPassed: boolean  | undefined) {
        this['is_passed'] = isPassed;
    }
    public get isPassed(): boolean | undefined {
        return this['is_passed'];
    }
}