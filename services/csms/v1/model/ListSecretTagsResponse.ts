import { SysTag } from './SysTag';
import { TagItem } from './TagItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecretTagsResponse extends SdkResponse {
    public tags?: Array<TagItem>;
    private 'sys_tags'?: Array<SysTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagItem>): ListSecretTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<SysTag>): ListSecretTagsResponse {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<SysTag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<SysTag> | undefined {
        return this['sys_tags'];
    }
}