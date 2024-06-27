import { ResourceTag } from './ResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFirewallTagsResponse extends SdkResponse {
    public tags?: Array<ResourceTag>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ResourceTag>): ShowFirewallTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withRequestId(requestId: string): ShowFirewallTagsResponse {
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