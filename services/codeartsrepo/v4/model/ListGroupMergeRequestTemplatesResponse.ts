import { GroupMergeRequestTemplateDto } from './GroupMergeRequestTemplateDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupMergeRequestTemplatesResponse extends SdkResponse {
    public body?: Array<GroupMergeRequestTemplateDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<GroupMergeRequestTemplateDto>): ListGroupMergeRequestTemplatesResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListGroupMergeRequestTemplatesResponse {
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