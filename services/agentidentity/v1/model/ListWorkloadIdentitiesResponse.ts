import { PageInfo } from './PageInfo';
import { WorkloadIdentitySummary } from './WorkloadIdentitySummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkloadIdentitiesResponse extends SdkResponse {
    private 'workload_identities'?: Array<WorkloadIdentitySummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withWorkloadIdentities(workloadIdentities: Array<WorkloadIdentitySummary>): ListWorkloadIdentitiesResponse {
        this['workload_identities'] = workloadIdentities;
        return this;
    }
    public set workloadIdentities(workloadIdentities: Array<WorkloadIdentitySummary>  | undefined) {
        this['workload_identities'] = workloadIdentities;
    }
    public get workloadIdentities(): Array<WorkloadIdentitySummary> | undefined {
        return this['workload_identities'];
    }
    public withPageInfo(pageInfo: PageInfo): ListWorkloadIdentitiesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}