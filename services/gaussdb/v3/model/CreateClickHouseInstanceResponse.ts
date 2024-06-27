import { CreateChInstanceInfo } from './CreateChInstanceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClickHouseInstanceResponse extends SdkResponse {
    public instance?: CreateChInstanceInfo;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withInstance(instance: CreateChInstanceInfo): CreateClickHouseInstanceResponse {
        this['instance'] = instance;
        return this;
    }
    public withJobId(jobId: string): CreateClickHouseInstanceResponse {
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