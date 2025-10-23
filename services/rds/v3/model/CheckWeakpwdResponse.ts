
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckWeakpwdResponse extends SdkResponse {
    public weak?: boolean;
    public constructor() { 
        super();
    }
    public withWeak(weak: boolean): CheckWeakpwdResponse {
        this['weak'] = weak;
        return this;
    }
}