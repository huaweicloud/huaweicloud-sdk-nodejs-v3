import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTagsForResourceResponse extends SdkResponse {
    private 'sys_tags'?: Array<Tag>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withSysTags(sysTags: Array<Tag>): ListTagsForResourceResponse {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<Tag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<Tag> | undefined {
        return this['sys_tags'];
    }
    public withCount(count: number): ListTagsForResourceResponse {
        this['count'] = count;
        return this;
    }
}