import { ResourceTag } from './ResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFirewallTagsResponse extends SdkResponse {
    public tags?: ResourceTag;
    private 'request_id'?: string;
    private 'sys_tags'?: ResourceTag;
    public constructor() { 
        super();
    }
    public withTags(tags: ResourceTag): ShowFirewallTagsResponse {
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
    public withSysTags(sysTags: ResourceTag): ShowFirewallTagsResponse {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: ResourceTag  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): ResourceTag | undefined {
        return this['sys_tags'];
    }
}