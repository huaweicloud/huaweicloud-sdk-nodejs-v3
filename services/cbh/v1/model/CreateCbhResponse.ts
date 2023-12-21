
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCbhResponse extends SdkResponse {
    private 'instance_key'?: number;
    private 'slave_instance_key'?: number;
    private 'request_info'?: number;
    private 'job_id'?: number;
    public constructor() { 
        super();
    }
    public withInstanceKey(instanceKey: number): CreateCbhResponse {
        this['instance_key'] = instanceKey;
        return this;
    }
    public set instanceKey(instanceKey: number  | undefined) {
        this['instance_key'] = instanceKey;
    }
    public get instanceKey(): number | undefined {
        return this['instance_key'];
    }
    public withSlaveInstanceKey(slaveInstanceKey: number): CreateCbhResponse {
        this['slave_instance_key'] = slaveInstanceKey;
        return this;
    }
    public set slaveInstanceKey(slaveInstanceKey: number  | undefined) {
        this['slave_instance_key'] = slaveInstanceKey;
    }
    public get slaveInstanceKey(): number | undefined {
        return this['slave_instance_key'];
    }
    public withRequestInfo(requestInfo: number): CreateCbhResponse {
        this['request_info'] = requestInfo;
        return this;
    }
    public set requestInfo(requestInfo: number  | undefined) {
        this['request_info'] = requestInfo;
    }
    public get requestInfo(): number | undefined {
        return this['request_info'];
    }
    public withJobId(jobId: number): CreateCbhResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
}