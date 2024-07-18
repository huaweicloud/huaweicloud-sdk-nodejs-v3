import { UnsubscribeVolumeResponseBody } from './UnsubscribeVolumeResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UnsubscribePostpaidVolumeResponse extends SdkResponse {
    public body?: Array<UnsubscribeVolumeResponseBody>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<UnsubscribeVolumeResponseBody>): UnsubscribePostpaidVolumeResponse {
        this['body'] = body;
        return this;
    }
}