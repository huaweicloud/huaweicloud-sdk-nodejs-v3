import { LimitSpeedReq } from './LimitSpeedReq';


export class BatchLimitSpeedReq {
    private 'speed_limits': Array<LimitSpeedReq> | undefined;
    public constructor(speedLimits?: any) { 
        this['speed_limits'] = speedLimits;
    }
    public withSpeedLimits(speedLimits: Array<LimitSpeedReq>): BatchLimitSpeedReq {
        this['speed_limits'] = speedLimits;
        return this;
    }
    public set speedLimits(speedLimits: Array<LimitSpeedReq> | undefined) {
        this['speed_limits'] = speedLimits;
    }
    public get speedLimits() {
        return this['speed_limits'];
    }
}