
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteBotMTrafficDetectionConditionResponse extends SdkResponse {
    public result?: boolean;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): DeleteBotMTrafficDetectionConditionResponse {
        this['result'] = result;
        return this;
    }
}