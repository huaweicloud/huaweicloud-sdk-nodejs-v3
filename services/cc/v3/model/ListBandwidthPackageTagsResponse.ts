import { RequestId } from './RequestId';
import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBandwidthPackageTagsResponse extends SdkResponse {
    private 'request_id'?: string;
    public tags?: Array<Tag>;
    public constructor(requestId?: string, tags?: Array<Tag>) { 
        super();
        this['request_id'] = requestId;
        this['tags'] = tags;
    }
    public withRequestId(requestId: string): ListBandwidthPackageTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTags(tags: Array<Tag>): ListBandwidthPackageTagsResponse {
        this['tags'] = tags;
        return this;
    }
}