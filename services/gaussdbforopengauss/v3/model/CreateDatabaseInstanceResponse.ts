import { CreateDatabaseInstanceResult } from './CreateDatabaseInstanceResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDatabaseInstanceResponse extends SdkResponse {
    public instance?: CreateDatabaseInstanceResult;
    private 'job_id'?: string;
    private 'order_id'?: string;
    public constructor() { 
        super();
    }
    public withInstance(instance: CreateDatabaseInstanceResult): CreateDatabaseInstanceResponse {
        this['instance'] = instance;
        return this;
    }
    public withJobId(jobId: string): CreateDatabaseInstanceResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withOrderId(orderId: string): CreateDatabaseInstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
}