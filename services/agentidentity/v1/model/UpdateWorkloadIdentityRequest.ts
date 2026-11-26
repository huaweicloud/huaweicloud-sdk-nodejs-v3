import { UpdateWorkloadIdentityReqBody } from './UpdateWorkloadIdentityReqBody';


export class UpdateWorkloadIdentityRequest {
    private 'workload_identity_name'?: string;
    public body?: UpdateWorkloadIdentityReqBody;
    public constructor(workloadIdentityName?: string) { 
        this['workload_identity_name'] = workloadIdentityName;
    }
    public withWorkloadIdentityName(workloadIdentityName: string): UpdateWorkloadIdentityRequest {
        this['workload_identity_name'] = workloadIdentityName;
        return this;
    }
    public set workloadIdentityName(workloadIdentityName: string  | undefined) {
        this['workload_identity_name'] = workloadIdentityName;
    }
    public get workloadIdentityName(): string | undefined {
        return this['workload_identity_name'];
    }
    public withBody(body: UpdateWorkloadIdentityReqBody): UpdateWorkloadIdentityRequest {
        this['body'] = body;
        return this;
    }
}