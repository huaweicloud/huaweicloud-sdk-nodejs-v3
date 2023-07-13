
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetVisionActiveCodeResponse extends SdkResponse {
    public activeCode?: string;
    public constructor() { 
        super();
    }
    public withActiveCode(activeCode: string): ResetVisionActiveCodeResponse {
        this['activeCode'] = activeCode;
        return this;
    }
}