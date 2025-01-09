import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTagByDesktopIdResponse extends SdkResponse {
    public tags?: Array<Tag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<Tag>): ShowTagByDesktopIdResponse {
        this['tags'] = tags;
        return this;
    }
}