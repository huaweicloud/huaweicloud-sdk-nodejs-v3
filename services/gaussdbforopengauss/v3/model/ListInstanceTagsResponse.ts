import { TagsResult } from './TagsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceTagsResponse extends SdkResponse {
    public tags?: Array<TagsResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagsResult>): ListInstanceTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withTotalCount(totalCount: number): ListInstanceTagsResponse {
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