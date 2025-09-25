import { ResourceTagInfo } from './ResourceTagInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceInstanceTagResponse extends SdkResponse {
    public tags?: Array<ResourceTagInfo>;
    private 'sys_tags'?: Array<ResourceTagInfo>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ResourceTagInfo>): ListResourceInstanceTagResponse {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<ResourceTagInfo>): ListResourceInstanceTagResponse {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ResourceTagInfo>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ResourceTagInfo> | undefined {
        return this['sys_tags'];
    }
}