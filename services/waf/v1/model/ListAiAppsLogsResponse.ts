import { LogItem } from './LogItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAiAppsLogsResponse extends SdkResponse {
    public total?: number;
    public items?: Array<LogItem>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAiAppsLogsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<LogItem>): ListAiAppsLogsResponse {
        this['items'] = items;
        return this;
    }
    public withXRequestId(xRequestId: string): ListAiAppsLogsResponse {
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