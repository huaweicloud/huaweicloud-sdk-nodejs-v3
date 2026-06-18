import { RepositoryMergeRequestTemplateDto } from './RepositoryMergeRequestTemplateDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestTemplatesResponse extends SdkResponse {
    public body?: Array<RepositoryMergeRequestTemplateDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RepositoryMergeRequestTemplateDto>): ListMergeRequestTemplatesResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListMergeRequestTemplatesResponse {
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