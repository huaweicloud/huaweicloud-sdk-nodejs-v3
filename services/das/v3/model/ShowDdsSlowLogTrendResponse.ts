import { SlowLogPoint } from './SlowLogPoint';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDdsSlowLogTrendResponse extends SdkResponse {
    public points?: Array<SlowLogPoint>;
    public interval?: number;
    public constructor() { 
        super();
    }
    public withPoints(points: Array<SlowLogPoint>): ShowDdsSlowLogTrendResponse {
        this['points'] = points;
        return this;
    }
    public withInterval(interval: number): ShowDdsSlowLogTrendResponse {
        this['interval'] = interval;
        return this;
    }
}