import { DiscussionTemplateDto } from './DiscussionTemplateDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDiscussionTemplatesResponse extends SdkResponse {
    public body?: Array<DiscussionTemplateDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<DiscussionTemplateDto>): ListDiscussionTemplatesResponse {
        this['body'] = body;
        return this;
    }
}