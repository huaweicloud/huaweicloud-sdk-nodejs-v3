import { AggTag } from './AggTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainTagsResponse extends SdkResponse {
    public tags?: Array<AggTag>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<AggTag>): ListDomainTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withRequestId(requestId: string): ListDomainTagsResponse {
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