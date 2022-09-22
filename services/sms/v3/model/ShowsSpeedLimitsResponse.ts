import { SpeedLimitlJson } from './SpeedLimitlJson';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowsSpeedLimitsResponse extends SdkResponse {
    private 'speed_limit'?: Array<SpeedLimitlJson> | undefined;
    public constructor() { 
        super();
    }
    public withSpeedLimit(speedLimit: Array<SpeedLimitlJson>): ShowsSpeedLimitsResponse {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: Array<SpeedLimitlJson> | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit() {
        return this['speed_limit'];
    }
}