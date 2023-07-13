
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVisionActiveCodeResponse extends SdkResponse {
    public activeCode?: string;
    public constructor() { 
        super();
    }
    public withActiveCode(activeCode: string): CreateVisionActiveCodeResponse {
        this['activeCode'] = activeCode;
        return this;
    }
}