import { ResourceTags } from './ResourceTags';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClouddcnSubnetsTagsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'total_count'?: number;
    public tags?: Array<ResourceTags>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListClouddcnSubnetsTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTotalCount(totalCount: number): ListClouddcnSubnetsTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTags(tags: Array<ResourceTags>): ListClouddcnSubnetsTagsResponse {
        this['tags'] = tags;
        return this;
    }
}