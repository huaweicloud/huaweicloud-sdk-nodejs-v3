import { PageInfoDto } from './PageInfoDto';
import { TagDto } from './TagDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTagsForResourceResponse extends SdkResponse {
    public tags?: Array<TagDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagDto>): ListTagsForResourceResponse {
        this['tags'] = tags;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDto): ListTagsForResourceResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}