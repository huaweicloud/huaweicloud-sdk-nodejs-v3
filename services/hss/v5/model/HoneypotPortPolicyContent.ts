import { HoneypotPortPolicyContentPortsList } from './HoneypotPortPolicyContentPortsList';


export class HoneypotPortPolicyContent {
    private 'os_type'?: string;
    private 'policy_name'?: string;
    private 'ports_list'?: Array<HoneypotPortPolicyContentPortsList>;
    private 'white_ip'?: Array<string>;
    private 'host_id'?: Array<string>;
    private 'group_list'?: Array<string>;
    public constructor(osType?: string, policyName?: string, portsList?: Array<HoneypotPortPolicyContentPortsList>, whiteIp?: Array<string>, hostId?: Array<string>) { 
        this['os_type'] = osType;
        this['policy_name'] = policyName;
        this['ports_list'] = portsList;
        this['white_ip'] = whiteIp;
        this['host_id'] = hostId;
    }
    public withOsType(osType: string): HoneypotPortPolicyContent {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withPolicyName(policyName: string): HoneypotPortPolicyContent {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPortsList(portsList: Array<HoneypotPortPolicyContentPortsList>): HoneypotPortPolicyContent {
        this['ports_list'] = portsList;
        return this;
    }
    public set portsList(portsList: Array<HoneypotPortPolicyContentPortsList>  | undefined) {
        this['ports_list'] = portsList;
    }
    public get portsList(): Array<HoneypotPortPolicyContentPortsList> | undefined {
        return this['ports_list'];
    }
    public withWhiteIp(whiteIp: Array<string>): HoneypotPortPolicyContent {
        this['white_ip'] = whiteIp;
        return this;
    }
    public set whiteIp(whiteIp: Array<string>  | undefined) {
        this['white_ip'] = whiteIp;
    }
    public get whiteIp(): Array<string> | undefined {
        return this['white_ip'];
    }
    public withHostId(hostId: Array<string>): HoneypotPortPolicyContent {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: Array<string>  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): Array<string> | undefined {
        return this['host_id'];
    }
    public withGroupList(groupList: Array<string>): HoneypotPortPolicyContent {
        this['group_list'] = groupList;
        return this;
    }
    public set groupList(groupList: Array<string>  | undefined) {
        this['group_list'] = groupList;
    }
    public get groupList(): Array<string> | undefined {
        return this['group_list'];
    }
}