import { AIApplicationListItem } from './AIApplicationListItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAiApplicationsResponse extends SdkResponse {
    private 'total_count'?: number;
    public data?: Array<AIApplicationListItem>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListAiApplicationsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withData(data: Array<AIApplicationListItem>): ListAiApplicationsResponse {
        this['data'] = data;
        return this;
    }
}