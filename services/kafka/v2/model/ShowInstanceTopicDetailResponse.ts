import { ShowInstanceTopicDetailRespPartitions } from './ShowInstanceTopicDetailRespPartitions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceTopicDetailResponse extends SdkResponse {
    public topic?: string;
    public partitions?: Array<ShowInstanceTopicDetailRespPartitions>;
    private 'group_subscribed'?: Array<string> | undefined;
    public constructor() { 
        super();
    }
    public withTopic(topic: string): ShowInstanceTopicDetailResponse {
        this['topic'] = topic;
        return this;
    }
    public withPartitions(partitions: Array<ShowInstanceTopicDetailRespPartitions>): ShowInstanceTopicDetailResponse {
        this['partitions'] = partitions;
        return this;
    }
    public withGroupSubscribed(groupSubscribed: Array<string>): ShowInstanceTopicDetailResponse {
        this['group_subscribed'] = groupSubscribed;
        return this;
    }
    public set groupSubscribed(groupSubscribed: Array<string> | undefined) {
        this['group_subscribed'] = groupSubscribed;
    }
    public get groupSubscribed() {
        return this['group_subscribed'];
    }
}