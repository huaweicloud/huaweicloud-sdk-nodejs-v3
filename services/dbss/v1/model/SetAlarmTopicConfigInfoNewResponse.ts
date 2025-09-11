
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetAlarmTopicConfigInfoNewResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): SetAlarmTopicConfigInfoNewResponse {
        this['status'] = status;
        return this;
    }
}