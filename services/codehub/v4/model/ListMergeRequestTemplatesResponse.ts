import { RepositoryMergeRequestTemplateDto } from './RepositoryMergeRequestTemplateDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestTemplatesResponse extends SdkResponse {
    public body?: Array<RepositoryMergeRequestTemplateDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RepositoryMergeRequestTemplateDto>): ListMergeRequestTemplatesResponse {
        this['body'] = body;
        return this;
    }
}