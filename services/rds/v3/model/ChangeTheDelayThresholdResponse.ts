
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeTheDelayThresholdResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): ChangeTheDelayThresholdResponse {
        this['result'] = result;
        return this;
    }
}