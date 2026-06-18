import { MergeRequestListBasicDto } from './MergeRequestListBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectMergeRequestsResponse extends SdkResponse {
    public body?: Array<MergeRequestListBasicDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MergeRequestListBasicDto>): ListProjectMergeRequestsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListProjectMergeRequestsResponse {
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