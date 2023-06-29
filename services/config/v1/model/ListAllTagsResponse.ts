import { PageInfo } from './PageInfo';
import { TagDetail } from './TagDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllTagsResponse extends SdkResponse {
    public tags?: Array<TagDetail>;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagDetail>): ListAllTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListAllTagsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}