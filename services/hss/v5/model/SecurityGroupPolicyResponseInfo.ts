import { SecurityGroup } from './SecurityGroup';


export class SecurityGroupPolicyResponseInfo {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    private 'pod_selector'?: string;
    private 'security_groups'?: Array<SecurityGroup>;
    private 'workload_id'?: string;
    private 'workload_name'?: string;
    private 'workload_type'?: string;
    private 'namespace_id'?: string;
    public namespace?: string;
    private 'create_time'?: string;
    private 'policy_content'?: string;
    public constructor(policyId?: string, policyName?: string, podSelector?: string, securityGroups?: Array<SecurityGroup>, workloadId?: string, workloadName?: string, workloadType?: string, namespace?: string, createTime?: string, policyContent?: string) { 
        this['policy_id'] = policyId;
        this['policy_name'] = policyName;
        this['pod_selector'] = podSelector;
        this['security_groups'] = securityGroups;
        this['workload_id'] = workloadId;
        this['workload_name'] = workloadName;
        this['workload_type'] = workloadType;
        this['namespace'] = namespace;
        this['create_time'] = createTime;
        this['policy_content'] = policyContent;
    }
    public withPolicyId(policyId: string): SecurityGroupPolicyResponseInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): SecurityGroupPolicyResponseInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPodSelector(podSelector: string): SecurityGroupPolicyResponseInfo {
        this['pod_selector'] = podSelector;
        return this;
    }
    public set podSelector(podSelector: string  | undefined) {
        this['pod_selector'] = podSelector;
    }
    public get podSelector(): string | undefined {
        return this['pod_selector'];
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroup>): SecurityGroupPolicyResponseInfo {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withWorkloadId(workloadId: string): SecurityGroupPolicyResponseInfo {
        this['workload_id'] = workloadId;
        return this;
    }
    public set workloadId(workloadId: string  | undefined) {
        this['workload_id'] = workloadId;
    }
    public get workloadId(): string | undefined {
        return this['workload_id'];
    }
    public withWorkloadName(workloadName: string): SecurityGroupPolicyResponseInfo {
        this['workload_name'] = workloadName;
        return this;
    }
    public set workloadName(workloadName: string  | undefined) {
        this['workload_name'] = workloadName;
    }
    public get workloadName(): string | undefined {
        return this['workload_name'];
    }
    public withWorkloadType(workloadType: string): SecurityGroupPolicyResponseInfo {
        this['workload_type'] = workloadType;
        return this;
    }
    public set workloadType(workloadType: string  | undefined) {
        this['workload_type'] = workloadType;
    }
    public get workloadType(): string | undefined {
        return this['workload_type'];
    }
    public withNamespaceId(namespaceId: string): SecurityGroupPolicyResponseInfo {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: string  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): string | undefined {
        return this['namespace_id'];
    }
    public withNamespace(namespace: string): SecurityGroupPolicyResponseInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withCreateTime(createTime: string): SecurityGroupPolicyResponseInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withPolicyContent(policyContent: string): SecurityGroupPolicyResponseInfo {
        this['policy_content'] = policyContent;
        return this;
    }
    public set policyContent(policyContent: string  | undefined) {
        this['policy_content'] = policyContent;
    }
    public get policyContent(): string | undefined {
        return this['policy_content'];
    }
}