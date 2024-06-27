import { ListTag } from './ListTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPortTagsResponse extends SdkResponse {
    public tags?: Array<ListTag>;
    private 'request_id'?: string;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ListTag>): ListPortTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withRequestId(requestId: string): ListPortTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTotalCount(totalCount: number): ListPortTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}