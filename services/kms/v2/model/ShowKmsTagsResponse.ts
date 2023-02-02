import { TagItem } from './TagItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKmsTagsResponse extends SdkResponse {
    public tags?: Array<TagItem>;
    public existTagsNum?: number;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagItem>): ShowKmsTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withExistTagsNum(existTagsNum: number): ShowKmsTagsResponse {
        this['existTagsNum'] = existTagsNum;
        return this;
    }
}