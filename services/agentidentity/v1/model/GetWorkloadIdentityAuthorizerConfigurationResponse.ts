import { WorkloadIdentityAuthorizerConfiguration } from './WorkloadIdentityAuthorizerConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetWorkloadIdentityAuthorizerConfigurationResponse extends SdkResponse {
    private 'workload_identity_authorizer_configuration'?: WorkloadIdentityAuthorizerConfiguration;
    public constructor() { 
        super();
    }
    public withWorkloadIdentityAuthorizerConfiguration(workloadIdentityAuthorizerConfiguration: WorkloadIdentityAuthorizerConfiguration): GetWorkloadIdentityAuthorizerConfigurationResponse {
        this['workload_identity_authorizer_configuration'] = workloadIdentityAuthorizerConfiguration;
        return this;
    }
    public set workloadIdentityAuthorizerConfiguration(workloadIdentityAuthorizerConfiguration: WorkloadIdentityAuthorizerConfiguration  | undefined) {
        this['workload_identity_authorizer_configuration'] = workloadIdentityAuthorizerConfiguration;
    }
    public get workloadIdentityAuthorizerConfiguration(): WorkloadIdentityAuthorizerConfiguration | undefined {
        return this['workload_identity_authorizer_configuration'];
    }
}