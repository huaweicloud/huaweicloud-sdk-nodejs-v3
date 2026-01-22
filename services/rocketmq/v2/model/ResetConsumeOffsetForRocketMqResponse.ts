import { ResetConsumeOffsetRespQueues } from './ResetConsumeOffsetRespQueues';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetConsumeOffsetForRocketMqResponse extends SdkResponse {
    public queues?: Array<ResetConsumeOffsetRespQueues>;
    public constructor() { 
        super();
    }
    public withQueues(queues: Array<ResetConsumeOffsetRespQueues>): ResetConsumeOffsetForRocketMqResponse {
        this['queues'] = queues;
        return this;
    }
}