import { Cluster } from './Cluster';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestoreClusterResponse extends SdkResponse {
    public cluster?: Cluster;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withCluster(cluster: Cluster): RestoreClusterResponse {
        this['cluster'] = cluster;
        return this;
    }
    public withJobId(jobId: string): RestoreClusterResponse {
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