import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPrivateNatTagsResponse extends SdkResponse {
    private 'request_id'?: string;
    public tags?: Array<Tag>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowPrivateNatTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTags(tags: Array<Tag>): ShowPrivateNatTagsResponse {
        this['tags'] = tags;
        return this;
    }
}