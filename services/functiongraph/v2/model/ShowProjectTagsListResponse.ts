import { TagItem } from './TagItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectTagsListResponse extends SdkResponse {
    public tags?: Array<TagItem>;
    private 'sys_tags'?: Array<TagItem> | undefined;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagItem>): ShowProjectTagsListResponse {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<TagItem>): ShowProjectTagsListResponse {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<TagItem> | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags() {
        return this['sys_tags'];
    }
}