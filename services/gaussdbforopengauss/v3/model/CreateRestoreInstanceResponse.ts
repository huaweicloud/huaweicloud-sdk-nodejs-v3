import { CreateInstanceRespItem } from './CreateInstanceRespItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRestoreInstanceResponse extends SdkResponse {
    public instance?: CreateInstanceRespItem;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withInstance(instance: CreateInstanceRespItem): CreateRestoreInstanceResponse {
        this['instance'] = instance;
        return this;
    }
    public withJobId(jobId: string): CreateRestoreInstanceResponse {
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