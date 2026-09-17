import { SpaceTrend } from './SpaceTrend';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSpaceTrendResponse extends SdkResponse {
    public series?: Array<SpaceTrend>;
    public constructor() { 
        super();
    }
    public withSeries(series: Array<SpaceTrend>): ShowSpaceTrendResponse {
        this['series'] = series;
        return this;
    }
}