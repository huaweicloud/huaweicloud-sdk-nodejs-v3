

export class ListAppWhitelistPolicyHostRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'policy_name'?: string;
    private 'learning_status'?: string;
    private 'apply_status'?: boolean;
    private 'asset_value'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'os_type'?: string;
    private 'policy_id'?: string;
    private 'public_ip'?: string;
    public constructor(enterpriseProjectId?: string, offset?: number, limit?: number) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAppWhitelistPolicyHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListAppWhitelistPolicyHostRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAppWhitelistPolicyHostRequest {
        this['limit'] = limit;
        return this;
    }
    public withPolicyName(policyName: string): ListAppWhitelistPolicyHostRequest {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withLearningStatus(learningStatus: string): ListAppWhitelistPolicyHostRequest {
        this['learning_status'] = learningStatus;
        return this;
    }
    public set learningStatus(learningStatus: string  | undefined) {
        this['learning_status'] = learningStatus;
    }
    public get learningStatus(): string | undefined {
        return this['learning_status'];
    }
    public withApplyStatus(applyStatus: boolean): ListAppWhitelistPolicyHostRequest {
        this['apply_status'] = applyStatus;
        return this;
    }
    public set applyStatus(applyStatus: boolean  | undefined) {
        this['apply_status'] = applyStatus;
    }
    public get applyStatus(): boolean | undefined {
        return this['apply_status'];
    }
    public withAssetValue(assetValue: string): ListAppWhitelistPolicyHostRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withHostName(hostName: string): ListAppWhitelistPolicyHostRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): ListAppWhitelistPolicyHostRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withOsType(osType: string): ListAppWhitelistPolicyHostRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withPolicyId(policyId: string): ListAppWhitelistPolicyHostRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPublicIp(publicIp: string): ListAppWhitelistPolicyHostRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
}