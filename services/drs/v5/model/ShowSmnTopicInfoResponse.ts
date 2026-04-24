import { SmnTopicInfo } from './SmnTopicInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSmnTopicInfoResponse extends SdkResponse {
    public topics?: Array<SmnTopicInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTopics(topics: Array<SmnTopicInfo>): ShowSmnTopicInfoResponse {
        this['topics'] = topics;
        return this;
    }
    public withTotalCount(totalCount: number): ShowSmnTopicInfoResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}