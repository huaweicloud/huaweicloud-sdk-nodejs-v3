

export class Ips {
    private 'ip_id'?: string;
    public ip?: string;
    public isp?: string;
    private 'data_center'?: string;
    private 'foreign_switch_status'?: number;
    private 'udp_switch_status'?: number;
    public constructor() { 
    }
    public withIpId(ipId: string): Ips {
        this['ip_id'] = ipId;
        return this;
    }
    public set ipId(ipId: string  | undefined) {
        this['ip_id'] = ipId;
    }
    public get ipId(): string | undefined {
        return this['ip_id'];
    }
    public withIp(ip: string): Ips {
        this['ip'] = ip;
        return this;
    }
    public withIsp(isp: string): Ips {
        this['isp'] = isp;
        return this;
    }
    public withDataCenter(dataCenter: string): Ips {
        this['data_center'] = dataCenter;
        return this;
    }
    public set dataCenter(dataCenter: string  | undefined) {
        this['data_center'] = dataCenter;
    }
    public get dataCenter(): string | undefined {
        return this['data_center'];
    }
    public withForeignSwitchStatus(foreignSwitchStatus: number): Ips {
        this['foreign_switch_status'] = foreignSwitchStatus;
        return this;
    }
    public set foreignSwitchStatus(foreignSwitchStatus: number  | undefined) {
        this['foreign_switch_status'] = foreignSwitchStatus;
    }
    public get foreignSwitchStatus(): number | undefined {
        return this['foreign_switch_status'];
    }
    public withUdpSwitchStatus(udpSwitchStatus: number): Ips {
        this['udp_switch_status'] = udpSwitchStatus;
        return this;
    }
    public set udpSwitchStatus(udpSwitchStatus: number  | undefined) {
        this['udp_switch_status'] = udpSwitchStatus;
    }
    public get udpSwitchStatus(): number | undefined {
        return this['udp_switch_status'];
    }
}