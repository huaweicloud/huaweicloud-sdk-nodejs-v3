import { TagsSingleValue } from './TagsSingleValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScalingTagInfosByResourceIdResponse extends SdkResponse {
    public tags?: Array<TagsSingleValue>;
    private 'sys_tags'?: Array<TagsSingleValue>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagsSingleValue>): ListScalingTagInfosByResourceIdResponse {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<TagsSingleValue>): ListScalingTagInfosByResourceIdResponse {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<TagsSingleValue>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<TagsSingleValue> | undefined {
        return this['sys_tags'];
    }
}