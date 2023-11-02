import { GlossaryInfo } from './GlossaryInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGlossaryListResponse extends SdkResponse {
    public count?: number;
    public limit?: number;
    public offset?: number;
    public quota?: number;
    public tags?: Array<GlossaryInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowGlossaryListResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): ShowGlossaryListResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowGlossaryListResponse {
        this['offset'] = offset;
        return this;
    }
    public withQuota(quota: number): ShowGlossaryListResponse {
        this['quota'] = quota;
        return this;
    }
    public withTags(tags: Array<GlossaryInfo>): ShowGlossaryListResponse {
        this['tags'] = tags;
        return this;
    }
}