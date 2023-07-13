import { ResetConsumeOffsetRespQueues } from './ResetConsumeOffsetRespQueues';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetConsumeOffsetResponse extends SdkResponse {
    public queues?: Array<ResetConsumeOffsetRespQueues>;
    public constructor() { 
        super();
    }
    public withQueues(queues: Array<ResetConsumeOffsetRespQueues>): ResetConsumeOffsetResponse {
        this['queues'] = queues;
        return this;
    }
}