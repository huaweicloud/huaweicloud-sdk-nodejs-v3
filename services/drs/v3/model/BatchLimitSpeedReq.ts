import { LimitSpeedReq } from './LimitSpeedReq';


export class BatchLimitSpeedReq {
    private 'speed_limits'?: Array<LimitSpeedReq>;
    public constructor(speedLimits?: Array<LimitSpeedReq>) { 
        this['speed_limits'] = speedLimits;
    }
    public withSpeedLimits(speedLimits: Array<LimitSpeedReq>): BatchLimitSpeedReq {
        this['speed_limits'] = speedLimits;
        return this;
    }
    public set speedLimits(speedLimits: Array<LimitSpeedReq>  | undefined) {
        this['speed_limits'] = speedLimits;
    }
    public get speedLimits(): Array<LimitSpeedReq> | undefined {
        return this['speed_limits'];
    }
}