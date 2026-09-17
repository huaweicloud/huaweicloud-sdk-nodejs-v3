import { MetricThresholdItem } from './MetricThresholdItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMetricThresholdResponse extends SdkResponse {
    private 'engine_type'?: string;
    public items?: Array<MetricThresholdItem>;
    public constructor() { 
        super();
    }
    public withEngineType(engineType: string): ShowMetricThresholdResponse {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withItems(items: Array<MetricThresholdItem>): ShowMetricThresholdResponse {
        this['items'] = items;
        return this;
    }
}