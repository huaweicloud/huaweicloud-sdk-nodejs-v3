import { SpeedLimitlJson } from './SpeedLimitlJson';


export class SpeedLimit {
    private 'speed_limit'?: Array<SpeedLimitlJson>;
    public constructor(speedLimit?: Array<SpeedLimitlJson>) { 
        this['speed_limit'] = speedLimit;
    }
    public withSpeedLimit(speedLimit: Array<SpeedLimitlJson>): SpeedLimit {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: Array<SpeedLimitlJson>  | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit(): Array<SpeedLimitlJson> | undefined {
        return this['speed_limit'];
    }
}