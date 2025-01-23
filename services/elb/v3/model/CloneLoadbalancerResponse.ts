import { CloneLoadbalancerResponseBodyLoadbalancerList } from './CloneLoadbalancerResponseBodyLoadbalancerList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CloneLoadbalancerResponse extends SdkResponse {
    private 'loadbalancer_list'?: Array<CloneLoadbalancerResponseBodyLoadbalancerList>;
    private 'request_id'?: string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withLoadbalancerList(loadbalancerList: Array<CloneLoadbalancerResponseBodyLoadbalancerList>): CloneLoadbalancerResponse {
        this['loadbalancer_list'] = loadbalancerList;
        return this;
    }
    public set loadbalancerList(loadbalancerList: Array<CloneLoadbalancerResponseBodyLoadbalancerList>  | undefined) {
        this['loadbalancer_list'] = loadbalancerList;
    }
    public get loadbalancerList(): Array<CloneLoadbalancerResponseBodyLoadbalancerList> | undefined {
        return this['loadbalancer_list'];
    }
    public withRequestId(requestId: string): CloneLoadbalancerResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withJobId(jobId: string): CloneLoadbalancerResponse {
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