import { OpenTag } from './OpenTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTagsResponse extends SdkResponse {
    public limit?: number;
    public offset?: number;
    public count?: number;
    public quota?: number;
    public tags?: Array<OpenTag>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withLimit(limit: number): ShowTagsResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowTagsResponse {
        this['offset'] = offset;
        return this;
    }
    public withCount(count: number): ShowTagsResponse {
        this['count'] = count;
        return this;
    }
    public withQuota(quota: number): ShowTagsResponse {
        this['quota'] = quota;
        return this;
    }
    public withTags(tags: Array<OpenTag>): ShowTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withTotal(total: number): ShowTagsResponse {
        this['total'] = total;
        return this;
    }
}