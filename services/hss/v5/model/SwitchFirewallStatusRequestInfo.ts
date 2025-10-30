

export class SwitchFirewallStatusRequestInfo {
    private 'firewall_status'?: string;
    private 'host_id_list'?: Array<string>;
    public constructor(firewallStatus?: string, hostIdList?: Array<string>) { 
        this['firewall_status'] = firewallStatus;
        this['host_id_list'] = hostIdList;
    }
    public withFirewallStatus(firewallStatus: string): SwitchFirewallStatusRequestInfo {
        this['firewall_status'] = firewallStatus;
        return this;
    }
    public set firewallStatus(firewallStatus: string  | undefined) {
        this['firewall_status'] = firewallStatus;
    }
    public get firewallStatus(): string | undefined {
        return this['firewall_status'];
    }
    public withHostIdList(hostIdList: Array<string>): SwitchFirewallStatusRequestInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
}