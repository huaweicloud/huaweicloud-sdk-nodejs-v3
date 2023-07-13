import { TagMultyValueEntity } from './TagMultyValueEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRabbitMqProjectTagsResponse extends SdkResponse {
    public tags?: Array<TagMultyValueEntity>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagMultyValueEntity>): ShowRabbitMqProjectTagsResponse {
        this['tags'] = tags;
        return this;
    }
}