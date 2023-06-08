import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceTagResponse extends SdkResponse {
    public tags?: Array<Tag>;
    public enterpriseProjectOrDefault?: string;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<Tag>): ShowResourceTagResponse {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectOrDefault(enterpriseProjectOrDefault: string): ShowResourceTagResponse {
        this['enterpriseProjectOrDefault'] = enterpriseProjectOrDefault;
        return this;
    }
}