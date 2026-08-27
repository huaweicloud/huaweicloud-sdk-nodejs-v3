
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteTriggerUpgradeResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): ExecuteTriggerUpgradeResponse {
        this['body'] = body;
        return this;
    }
}