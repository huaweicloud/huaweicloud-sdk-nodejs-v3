import { ResourceTagItem } from './ResourceTagItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceTagsResponse extends SdkResponse {
    private 'total_count'?: number;
    public tags?: Array<ResourceTagItem>;
    public constructor() { 
        super();
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
    public withTags(tags: Array<ResourceTagItem>): ListInstanceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}