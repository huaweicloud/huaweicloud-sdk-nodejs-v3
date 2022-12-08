import { ResourceTag } from './ResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceTagsResponse extends SdkResponse {
    public tags?: Array<ResourceTag>;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ResourceTag>): ShowResourceTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withRequestId(requestId: string): ShowResourceTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}