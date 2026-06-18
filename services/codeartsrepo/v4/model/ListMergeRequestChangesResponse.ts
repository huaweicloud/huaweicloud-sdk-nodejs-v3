import { SimpleMergeRequestChangesDto } from './SimpleMergeRequestChangesDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestChangesResponse extends SdkResponse {
    public body?: Array<SimpleMergeRequestChangesDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<SimpleMergeRequestChangesDto>): ListMergeRequestChangesResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListMergeRequestChangesResponse {
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