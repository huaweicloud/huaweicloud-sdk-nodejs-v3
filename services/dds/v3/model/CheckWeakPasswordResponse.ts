
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckWeakPasswordResponse extends SdkResponse {
    public weak?: boolean;
    public constructor() { 
        super();
    }
    public withWeak(weak: boolean): CheckWeakPasswordResponse {
        this['weak'] = weak;
        return this;
    }
}