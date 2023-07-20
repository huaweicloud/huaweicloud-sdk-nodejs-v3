
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckWeekPasswordResponse extends SdkResponse {
    public weak?: boolean;
    public constructor() { 
        super();
    }
    public withWeak(weak: boolean): CheckWeekPasswordResponse {
        this['weak'] = weak;
        return this;
    }
}