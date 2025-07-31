
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetAlarmTopicConfigInfoResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): SetAlarmTopicConfigInfoResponse {
        this['status'] = status;
        return this;
    }
}