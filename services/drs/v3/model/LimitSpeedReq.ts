import { SpeedLimitInfo } from './SpeedLimitInfo';


export class LimitSpeedReq {
    private 'job_id'?: string;
    private 'speed_limit'?: Array<SpeedLimitInfo>;
    public constructor(jobId?: string, speedLimit?: Array<SpeedLimitInfo>) { 
        this['job_id'] = jobId;
        this['speed_limit'] = speedLimit;
    }
    public withJobId(jobId: string): LimitSpeedReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withSpeedLimit(speedLimit: Array<SpeedLimitInfo>): LimitSpeedReq {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: Array<SpeedLimitInfo>  | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit(): Array<SpeedLimitInfo> | undefined {
        return this['speed_limit'];
    }
}