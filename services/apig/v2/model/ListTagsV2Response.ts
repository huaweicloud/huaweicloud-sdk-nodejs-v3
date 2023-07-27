import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTagsV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public tags?: Array<string>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListTagsV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListTagsV2Response {
        this['total'] = total;
        return this;
    }
    public withTags(tags: Array<string>): ListTagsV2Response {
        this['tags'] = tags;
        return this;
    }
}