import { TagMultyValueEntity } from './TagMultyValueEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRocketmqProjectTagsResponse extends SdkResponse {
    public total?: number;
    private 'next_offset'?: number;
    private 'previous_offset'?: number;
    public tags?: Array<TagMultyValueEntity>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowRocketmqProjectTagsResponse {
        this['total'] = total;
        return this;
    }
    public withNextOffset(nextOffset: number): ShowRocketmqProjectTagsResponse {
        this['next_offset'] = nextOffset;
        return this;
    }
    public set nextOffset(nextOffset: number  | undefined) {
        this['next_offset'] = nextOffset;
    }
    public get nextOffset(): number | undefined {
        return this['next_offset'];
    }
    public withPreviousOffset(previousOffset: number): ShowRocketmqProjectTagsResponse {
        this['previous_offset'] = previousOffset;
        return this;
    }
    public set previousOffset(previousOffset: number  | undefined) {
        this['previous_offset'] = previousOffset;
    }
    public get previousOffset(): number | undefined {
        return this['previous_offset'];
    }
    public withTags(tags: Array<TagMultyValueEntity>): ShowRocketmqProjectTagsResponse {
        this['tags'] = tags;
        return this;
    }
}