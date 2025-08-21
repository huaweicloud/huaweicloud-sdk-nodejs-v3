import { MergeRequestTemplateDto } from './MergeRequestTemplateDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestTemplatesResponse extends SdkResponse {
    public body?: Array<MergeRequestTemplateDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MergeRequestTemplateDto>): ListMergeRequestTemplatesResponse {
        this['body'] = body;
        return this;
    }
}