import { AlertRule } from './AlertRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlertRulesResponse extends SdkResponse {
    public count?: number;
    public records?: Array<AlertRule>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAlertRulesResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<AlertRule>): ListAlertRulesResponse {
        this['records'] = records;
        return this;
    }
    public withXRequestId(xRequestId: string): ListAlertRulesResponse {
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