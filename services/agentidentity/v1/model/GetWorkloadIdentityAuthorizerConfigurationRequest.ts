

export class GetWorkloadIdentityAuthorizerConfigurationRequest {
    private 'workload_identity_name'?: string;
    public constructor(workloadIdentityName?: string) { 
        this['workload_identity_name'] = workloadIdentityName;
    }
    public withWorkloadIdentityName(workloadIdentityName: string): GetWorkloadIdentityAuthorizerConfigurationRequest {
        this['workload_identity_name'] = workloadIdentityName;
        return this;
    }
    public set workloadIdentityName(workloadIdentityName: string  | undefined) {
        this['workload_identity_name'] = workloadIdentityName;
    }
    public get workloadIdentityName(): string | undefined {
        return this['workload_identity_name'];
    }
}