import { OverviewStatistics } from './OverviewStatistics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAiGuardOverviewSummaryResponse extends SdkResponse {
    public total?: number;
    public items?: Array<OverviewStatistics>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAiGuardOverviewSummaryResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<OverviewStatistics>): ListAiGuardOverviewSummaryResponse {
        this['items'] = items;
        return this;
    }
    public withXRequestId(xRequestId: string): ListAiGuardOverviewSummaryResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}