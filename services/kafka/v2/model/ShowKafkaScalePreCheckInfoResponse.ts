import { ShowKafkaScalePreCheckInfoResponseBody } from './ShowKafkaScalePreCheckInfoResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKafkaScalePreCheckInfoResponse extends SdkResponse {
    public body?: Array<ShowKafkaScalePreCheckInfoResponseBody>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ShowKafkaScalePreCheckInfoResponseBody>): ShowKafkaScalePreCheckInfoResponse {
        this['body'] = body;
        return this;
    }
}