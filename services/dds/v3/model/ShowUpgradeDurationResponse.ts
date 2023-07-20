import { DurationStrategies } from './DurationStrategies';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUpgradeDurationResponse extends SdkResponse {
    public strategies?: Array<DurationStrategies>;
    public constructor() { 
        super();
    }
    public withStrategies(strategies: Array<DurationStrategies>): ShowUpgradeDurationResponse {
        this['strategies'] = strategies;
        return this;
    }
}