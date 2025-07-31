

export class AppWhitelistPolicyHostResponseInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'asset_value'?: string;
    private 'policy_name'?: string;
    private 'event_num'?: number;
    private 'os_type'?: string;
    private 'learning_status'?: string;
    private 'apply_status'?: boolean;
    public intercept?: boolean;
    private 'policy_id'?: string;
    private 'policy_type'?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): AppWhitelistPolicyHostResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): AppWhitelistPolicyHostResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPublicIp(publicIp: string): AppWhitelistPolicyHostResponseInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): AppWhitelistPolicyHostResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withAssetValue(assetValue: string): AppWhitelistPolicyHostResponseInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withPolicyName(policyName: string): AppWhitelistPolicyHostResponseInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withEventNum(eventNum: number): AppWhitelistPolicyHostResponseInfo {
        this['event_num'] = eventNum;
        return this;
    }
    public set eventNum(eventNum: number  | undefined) {
        this['event_num'] = eventNum;
    }
    public get eventNum(): number | undefined {
        return this['event_num'];
    }
    public withOsType(osType: string): AppWhitelistPolicyHostResponseInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withLearningStatus(learningStatus: string): AppWhitelistPolicyHostResponseInfo {
        this['learning_status'] = learningStatus;
        return this;
    }
    public set learningStatus(learningStatus: string  | undefined) {
        this['learning_status'] = learningStatus;
    }
    public get learningStatus(): string | undefined {
        return this['learning_status'];
    }
    public withApplyStatus(applyStatus: boolean): AppWhitelistPolicyHostResponseInfo {
        this['apply_status'] = applyStatus;
        return this;
    }
    public set applyStatus(applyStatus: boolean  | undefined) {
        this['apply_status'] = applyStatus;
    }
    public get applyStatus(): boolean | undefined {
        return this['apply_status'];
    }
    public withIntercept(intercept: boolean): AppWhitelistPolicyHostResponseInfo {
        this['intercept'] = intercept;
        return this;
    }
    public withPolicyId(policyId: string): AppWhitelistPolicyHostResponseInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyType(policyType: string): AppWhitelistPolicyHostResponseInfo {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): string | undefined {
        return this['policy_type'];
    }
}