import { Tags } from './Tags';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectTagsResponse extends SdkResponse {
    public tags?: Array<Tags>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<Tags>): ListProjectTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withTotalCount(totalCount: number): ListProjectTagsResponse {
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