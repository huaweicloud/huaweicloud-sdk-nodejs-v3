import { SrCreateInstanceRspInstance } from './SrCreateInstanceRspInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateStarrocksInstanceResponse extends SdkResponse {
    public instance?: SrCreateInstanceRspInstance;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withInstance(instance: SrCreateInstanceRspInstance): CreateStarrocksInstanceResponse {
        this['instance'] = instance;
        return this;
    }
    public withJobId(jobId: string): CreateStarrocksInstanceResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}