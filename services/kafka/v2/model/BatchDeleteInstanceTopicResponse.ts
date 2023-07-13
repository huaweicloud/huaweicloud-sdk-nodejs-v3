import { BatchDeleteInstanceTopicRespTopics } from './BatchDeleteInstanceTopicRespTopics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteInstanceTopicResponse extends SdkResponse {
    public topics?: Array<BatchDeleteInstanceTopicRespTopics>;
    public constructor() { 
        super();
    }
    public withTopics(topics: Array<BatchDeleteInstanceTopicRespTopics>): BatchDeleteInstanceTopicResponse {
        this['topics'] = topics;
        return this;
    }
}