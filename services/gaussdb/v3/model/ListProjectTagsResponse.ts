import { ProjectTagItem } from './ProjectTagItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectTagsResponse extends SdkResponse {
    private 'total_count'?: number;
    public tags?: Array<ProjectTagItem>;
    public constructor() { 
        super();
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
    public withTags(tags: Array<ProjectTagItem>): ListProjectTagsResponse {
        this['tags'] = tags;
        return this;
    }
}