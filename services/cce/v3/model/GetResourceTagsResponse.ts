import { ResourceTag } from './ResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetResourceTagsResponse extends SdkResponse {
    public tags?: Array<ResourceTag>;
    private 'sys_tags'?: Array<ResourceTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ResourceTag>): GetResourceTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<ResourceTag>): GetResourceTagsResponse {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ResourceTag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ResourceTag> | undefined {
        return this['sys_tags'];
    }
}