

export class PolicyListDataList {
    private 'policy_name'?: string;
    private 'policy_id'?: string;
    private 'host_num'?: number;
    private 'is_default'?: boolean;
    private 'port_list'?: Array<number>;
    private 'os_type'?: string;
    public status?: string;
    public constructor() { 
    }
    public withPolicyName(policyName: string): PolicyListDataList {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyId(policyId: string): PolicyListDataList {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withHostNum(hostNum: number): PolicyListDataList {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withIsDefault(isDefault: boolean): PolicyListDataList {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
    public withPortList(portList: Array<number>): PolicyListDataList {
        this['port_list'] = portList;
        return this;
    }
    public set portList(portList: Array<number>  | undefined) {
        this['port_list'] = portList;
    }
    public get portList(): Array<number> | undefined {
        return this['port_list'];
    }
    public withOsType(osType: string): PolicyListDataList {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withStatus(status: string): PolicyListDataList {
        this['status'] = status;
        return this;
    }
}