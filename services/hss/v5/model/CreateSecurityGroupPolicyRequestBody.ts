import { SecurityGroup } from './SecurityGroup';


export class CreateSecurityGroupPolicyRequestBody {
    private 'policy_name'?: string;
    private 'workload_id'?: string;
    private 'workload_name'?: string;
    private 'workload_type'?: string;
    private 'security_groups'?: Array<SecurityGroup>;
    public constructor(policyName?: string, workloadId?: string, workloadName?: string, workloadType?: string, securityGroups?: Array<SecurityGroup>) { 
        this['policy_name'] = policyName;
        this['workload_id'] = workloadId;
        this['workload_name'] = workloadName;
        this['workload_type'] = workloadType;
        this['security_groups'] = securityGroups;
    }
    public withPolicyName(policyName: string): CreateSecurityGroupPolicyRequestBody {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withWorkloadId(workloadId: string): CreateSecurityGroupPolicyRequestBody {
        this['workload_id'] = workloadId;
        return this;
    }
    public set workloadId(workloadId: string  | undefined) {
        this['workload_id'] = workloadId;
    }
    public get workloadId(): string | undefined {
        return this['workload_id'];
    }
    public withWorkloadName(workloadName: string): CreateSecurityGroupPolicyRequestBody {
        this['workload_name'] = workloadName;
        return this;
    }
    public set workloadName(workloadName: string  | undefined) {
        this['workload_name'] = workloadName;
    }
    public get workloadName(): string | undefined {
        return this['workload_name'];
    }
    public withWorkloadType(workloadType: string): CreateSecurityGroupPolicyRequestBody {
        this['workload_type'] = workloadType;
        return this;
    }
    public set workloadType(workloadType: string  | undefined) {
        this['workload_type'] = workloadType;
    }
    public get workloadType(): string | undefined {
        return this['workload_type'];
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroup>): CreateSecurityGroupPolicyRequestBody {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroup> | undefined {
        return this['security_groups'];
    }
}