import { ProjectMergeRequestTemplateDto } from './ProjectMergeRequestTemplateDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectMergeRequestTemplatesResponse extends SdkResponse {
    public body?: Array<ProjectMergeRequestTemplateDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ProjectMergeRequestTemplateDto>): ListProjectMergeRequestTemplatesResponse {
        this['body'] = body;
        return this;
    }
}