import { Topics } from './Topics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScalingNotificationsResponse extends SdkResponse {
    public topics?: Array<Topics>;
    public constructor() { 
        super();
    }
    public withTopics(topics: Array<Topics>): ListScalingNotificationsResponse {
        this['topics'] = topics;
        return this;
    }
}