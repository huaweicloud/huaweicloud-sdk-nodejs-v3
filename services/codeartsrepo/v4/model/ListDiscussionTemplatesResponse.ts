import { DiscussionTemplateDto } from './DiscussionTemplateDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDiscussionTemplatesResponse extends SdkResponse {
    public body?: Array<DiscussionTemplateDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<DiscussionTemplateDto>): ListDiscussionTemplatesResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListDiscussionTemplatesResponse {
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