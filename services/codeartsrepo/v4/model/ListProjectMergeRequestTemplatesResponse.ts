import { ProjectMergeRequestTemplateDto } from './ProjectMergeRequestTemplateDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectMergeRequestTemplatesResponse extends SdkResponse {
    public body?: Array<ProjectMergeRequestTemplateDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ProjectMergeRequestTemplateDto>): ListProjectMergeRequestTemplatesResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListProjectMergeRequestTemplatesResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}