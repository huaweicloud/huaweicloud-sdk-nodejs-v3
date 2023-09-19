import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTagsResponse extends SdkResponse {
    public tags?: Array<Tag>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<Tag>): ListTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withRequestId(requestId: string): ListTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}