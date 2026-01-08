
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteLoadbalancersResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'loadbalancer_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): BatchDeleteLoadbalancersResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withLoadbalancerIds(loadbalancerIds: Array<string>): BatchDeleteLoadbalancersResponse {
        this['loadbalancer_ids'] = loadbalancerIds;
        return this;
    }
    public set loadbalancerIds(loadbalancerIds: Array<string>  | undefined) {
        this['loadbalancer_ids'] = loadbalancerIds;
    }
    public get loadbalancerIds(): Array<string> | undefined {
        return this['loadbalancer_ids'];
    }
}