import { MergeRequestListBasicDto } from './MergeRequestListBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPersonalMergeRequestsResponse extends SdkResponse {
    public body?: Array<MergeRequestListBasicDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MergeRequestListBasicDto>): ListPersonalMergeRequestsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListPersonalMergeRequestsResponse {
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