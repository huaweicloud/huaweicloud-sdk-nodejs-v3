import { ListTag } from './ListTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFirewallTagsResponse extends SdkResponse {
    public tags?: ListTag;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTags(tags: ListTag): ListFirewallTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withRequestId(requestId: string): ListFirewallTagsResponse {
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