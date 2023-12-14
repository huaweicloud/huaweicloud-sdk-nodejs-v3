import { PageInfo } from './PageInfo';
import { TagDetail } from './TagDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTrackedResourceTagsResponse extends SdkResponse {
    public tags?: Array<TagDetail>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagDetail>): ListTrackedResourceTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListTrackedResourceTagsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}