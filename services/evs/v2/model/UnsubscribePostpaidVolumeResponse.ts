
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UnsubscribePostpaidVolumeResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): UnsubscribePostpaidVolumeResponse {
        this['body'] = body;
        return this;
    }
}