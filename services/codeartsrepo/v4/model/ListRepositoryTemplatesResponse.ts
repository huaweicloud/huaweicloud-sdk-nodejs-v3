import { RepositoryTemplateDto } from './RepositoryTemplateDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryTemplatesResponse extends SdkResponse {
    public body?: Array<RepositoryTemplateDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RepositoryTemplateDto>): ListRepositoryTemplatesResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListRepositoryTemplatesResponse {
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