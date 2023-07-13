import { SpeedLimitInfo } from './SpeedLimitInfo';


export class LimitSpeedReq {
    private 'job_id': string | undefined;
    private 'speed_limit': Array<SpeedLimitInfo> | undefined;
    public constructor(jobId?: any, speedLimit?: any) { 
        this['job_id'] = jobId;
        this['speed_limit'] = speedLimit;
    }
    public withJobId(jobId: string): LimitSpeedReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withSpeedLimit(speedLimit: Array<SpeedLimitInfo>): LimitSpeedReq {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: Array<SpeedLimitInfo> | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit() {
        return this['speed_limit'];
    }
}