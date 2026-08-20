import { ShowKafkaScalePreCheckInfoEntity } from './ShowKafkaScalePreCheckInfoEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKafkaScalePreCheckInfoResponse extends SdkResponse {
    public body?: Array<ShowKafkaScalePreCheckInfoEntity>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ShowKafkaScalePreCheckInfoEntity>): ShowKafkaScalePreCheckInfoResponse {
        this['body'] = body;
        return this;
    }
}