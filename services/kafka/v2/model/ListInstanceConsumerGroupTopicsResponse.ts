import { GroupTopicEntity } from './GroupTopicEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceConsumerGroupTopicsResponse extends SdkResponse {
    public topics?: Array<GroupTopicEntity>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTopics(topics: Array<GroupTopicEntity>): ListInstanceConsumerGroupTopicsResponse {
        this['topics'] = topics;
        return this;
    }
    public withTotal(total: number): ListInstanceConsumerGroupTopicsResponse {
        this['total'] = total;
        return this;
    }
}