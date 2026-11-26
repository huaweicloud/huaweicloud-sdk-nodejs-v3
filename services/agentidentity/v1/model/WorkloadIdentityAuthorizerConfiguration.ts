import { AuthorizerConfiguration } from './AuthorizerConfiguration';
import { AuthorizerType } from './AuthorizerType';


export class WorkloadIdentityAuthorizerConfiguration {
    private 'workload_identity_name'?: string;
    private 'authorizer_type'?: AuthorizerType;
    private 'authorizer_configuration'?: AuthorizerConfiguration;
    public constructor(workloadIdentityName?: string, authorizerType?: AuthorizerType) { 
        this['workload_identity_name'] = workloadIdentityName;
        this['authorizer_type'] = authorizerType;
    }
    public withWorkloadIdentityName(workloadIdentityName: string): WorkloadIdentityAuthorizerConfiguration {
        this['workload_identity_name'] = workloadIdentityName;
        return this;
    }
    public set workloadIdentityName(workloadIdentityName: string  | undefined) {
        this['workload_identity_name'] = workloadIdentityName;
    }
    public get workloadIdentityName(): string | undefined {
        return this['workload_identity_name'];
    }
    public withAuthorizerType(authorizerType: AuthorizerType): WorkloadIdentityAuthorizerConfiguration {
        this['authorizer_type'] = authorizerType;
        return this;
    }
    public set authorizerType(authorizerType: AuthorizerType  | undefined) {
        this['authorizer_type'] = authorizerType;
    }
    public get authorizerType(): AuthorizerType | undefined {
        return this['authorizer_type'];
    }
    public withAuthorizerConfiguration(authorizerConfiguration: AuthorizerConfiguration): WorkloadIdentityAuthorizerConfiguration {
        this['authorizer_configuration'] = authorizerConfiguration;
        return this;
    }
    public set authorizerConfiguration(authorizerConfiguration: AuthorizerConfiguration  | undefined) {
        this['authorizer_configuration'] = authorizerConfiguration;
    }
    public get authorizerConfiguration(): AuthorizerConfiguration | undefined {
        return this['authorizer_configuration'];
    }
}