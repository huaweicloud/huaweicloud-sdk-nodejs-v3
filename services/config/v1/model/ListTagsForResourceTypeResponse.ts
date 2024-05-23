import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTagsForResourceTypeResponse extends SdkResponse {
    public tags?: Array<Tag>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<Tag>): ListTagsForResourceTypeResponse {
        this['tags'] = tags;
        return this;
    }
    public withTotalCount(totalCount: number): ListTagsForResourceTypeResponse {
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