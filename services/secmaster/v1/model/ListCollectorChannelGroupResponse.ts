import { Group } from './Group';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCollectorChannelGroupResponse extends SdkResponse {
    public body?: Array<Group>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<Group>): ListCollectorChannelGroupResponse {
        this['body'] = body;
        return this;
    }
}