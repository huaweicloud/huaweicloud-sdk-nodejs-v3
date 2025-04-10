import { PolicyDetailsPortList } from './PolicyDetailsPortList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDecoyPortPolicyDetailsResponse extends SdkResponse {
    private 'policy_name'?: string;
    private 'port_list'?: Array<PolicyDetailsPortList>;
    private 'os_type'?: string;
    private 'white_ip'?: Array<string>;
    private 'host_list'?: Array<string>;
    public constructor() { 
        super();
    }
    public withPolicyName(policyName: string): ShowDecoyPortPolicyDetailsResponse {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPortList(portList: Array<PolicyDetailsPortList>): ShowDecoyPortPolicyDetailsResponse {
        this['port_list'] = portList;
        return this;
    }
    public set portList(portList: Array<PolicyDetailsPortList>  | undefined) {
        this['port_list'] = portList;
    }
    public get portList(): Array<PolicyDetailsPortList> | undefined {
        return this['port_list'];
    }
    public withOsType(osType: string): ShowDecoyPortPolicyDetailsResponse {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withWhiteIp(whiteIp: Array<string>): ShowDecoyPortPolicyDetailsResponse {
        this['white_ip'] = whiteIp;
        return this;
    }
    public set whiteIp(whiteIp: Array<string>  | undefined) {
        this['white_ip'] = whiteIp;
    }
    public get whiteIp(): Array<string> | undefined {
        return this['white_ip'];
    }
    public withHostList(hostList: Array<string>): ShowDecoyPortPolicyDetailsResponse {
        this['host_list'] = hostList;
        return this;
    }
    public set hostList(hostList: Array<string>  | undefined) {
        this['host_list'] = hostList;
    }
    public get hostList(): Array<string> | undefined {
        return this['host_list'];
    }
}