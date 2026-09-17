import { RiskInfo } from './RiskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRisksResponse extends SdkResponse {
    private 'metric_code'?: string;
    private 'display_metric_codes'?: Array<string>;
    private 'metric_names'?: Array<string>;
    public units?: Array<string>;
    public items?: Array<RiskInfo>;
    public constructor() { 
        super();
    }
    public withMetricCode(metricCode: string): ListRisksResponse {
        this['metric_code'] = metricCode;
        return this;
    }
    public set metricCode(metricCode: string  | undefined) {
        this['metric_code'] = metricCode;
    }
    public get metricCode(): string | undefined {
        return this['metric_code'];
    }
    public withDisplayMetricCodes(displayMetricCodes: Array<string>): ListRisksResponse {
        this['display_metric_codes'] = displayMetricCodes;
        return this;
    }
    public set displayMetricCodes(displayMetricCodes: Array<string>  | undefined) {
        this['display_metric_codes'] = displayMetricCodes;
    }
    public get displayMetricCodes(): Array<string> | undefined {
        return this['display_metric_codes'];
    }
    public withMetricNames(metricNames: Array<string>): ListRisksResponse {
        this['metric_names'] = metricNames;
        return this;
    }
    public set metricNames(metricNames: Array<string>  | undefined) {
        this['metric_names'] = metricNames;
    }
    public get metricNames(): Array<string> | undefined {
        return this['metric_names'];
    }
    public withUnits(units: Array<string>): ListRisksResponse {
        this['units'] = units;
        return this;
    }
    public withItems(items: Array<RiskInfo>): ListRisksResponse {
        this['items'] = items;
        return this;
    }
}