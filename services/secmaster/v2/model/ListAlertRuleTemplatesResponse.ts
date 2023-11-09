import { AlertRuleTemplate } from './AlertRuleTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlertRuleTemplatesResponse extends SdkResponse {
    public count?: number;
    public records?: Array<AlertRuleTemplate>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAlertRuleTemplatesResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<AlertRuleTemplate>): ListAlertRuleTemplatesResponse {
        this['records'] = records;
        return this;
    }
    public withXRequestId(xRequestId: string): ListAlertRuleTemplatesResponse {
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