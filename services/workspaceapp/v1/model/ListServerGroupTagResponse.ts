import { TmsTagValues } from './TmsTagValues';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServerGroupTagResponse extends SdkResponse {
    public tags?: Array<TmsTagValues>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TmsTagValues>): ListServerGroupTagResponse {
        this['tags'] = tags;
        return this;
    }
}