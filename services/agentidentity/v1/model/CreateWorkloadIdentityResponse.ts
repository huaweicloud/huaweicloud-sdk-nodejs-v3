import { WorkloadIdentity } from './WorkloadIdentity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateWorkloadIdentityResponse extends SdkResponse {
    private 'workload_identity'?: WorkloadIdentity;
    public constructor() { 
        super();
    }
    public withWorkloadIdentity(workloadIdentity: WorkloadIdentity): CreateWorkloadIdentityResponse {
        this['workload_identity'] = workloadIdentity;
        return this;
    }
    public set workloadIdentity(workloadIdentity: WorkloadIdentity  | undefined) {
        this['workload_identity'] = workloadIdentity;
    }
    public get workloadIdentity(): WorkloadIdentity | undefined {
        return this['workload_identity'];
    }
}