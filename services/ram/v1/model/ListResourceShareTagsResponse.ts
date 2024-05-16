import { PageInfoMarkerByKey } from './PageInfoMarkerByKey';
import { TagDTO } from './TagDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceShareTagsResponse extends SdkResponse {
    public tags?: Array<TagDTO>;
    private 'page_info'?: PageInfoMarkerByKey;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagDTO>): ListResourceShareTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoMarkerByKey): ListResourceShareTagsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoMarkerByKey  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoMarkerByKey | undefined {
        return this['page_info'];
    }
}