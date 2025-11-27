import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTransitSubnetTagsResponse extends SdkResponse {
    private 'request_id'?: string;
    public tags?: Array<Tag>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowTransitSubnetTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTags(tags: Array<Tag>): ShowTransitSubnetTagsResponse {
        this['tags'] = tags;
        return this;
    }
}