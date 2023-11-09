
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlertRuleMetricsResponse extends SdkResponse {
    public category?: ListAlertRuleMetricsResponseCategoryEnum | string;
    public metric?: { [key: string]: number; };
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCategory(category: ListAlertRuleMetricsResponseCategoryEnum | string): ListAlertRuleMetricsResponse {
        this['category'] = category;
        return this;
    }
    public withMetric(metric: { [key: string]: number; }): ListAlertRuleMetricsResponse {
        this['metric'] = metric;
        return this;
    }
    public withXRequestId(xRequestId: string): ListAlertRuleMetricsResponse {
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

/**
    * @export
    * @enum {string}
    */
export enum ListAlertRuleMetricsResponseCategoryEnum {
    GROUP_COUNT = 'GROUP_COUNT'
}
