import { TagResource } from './TagResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopByTagsResponse extends SdkResponse {
    public offset?: number;
    public resources?: Array<TagResource>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListDesktopByTagsResponse {
        this['offset'] = offset;
        return this;
    }
    public withResources(resources: Array<TagResource>): ListDesktopByTagsResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ListDesktopByTagsResponse {
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