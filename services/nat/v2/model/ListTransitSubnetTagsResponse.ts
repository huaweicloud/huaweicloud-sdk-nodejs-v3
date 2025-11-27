import { Tags } from './Tags';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTransitSubnetTagsResponse extends SdkResponse {
    private 'request_id'?: string;
    public tags?: Array<Tags>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListTransitSubnetTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTags(tags: Array<Tags>): ListTransitSubnetTagsResponse {
        this['tags'] = tags;
        return this;
    }
}