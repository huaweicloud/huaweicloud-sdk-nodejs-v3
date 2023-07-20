import { NovaServerInterfaceFixedIp } from './NovaServerInterfaceFixedIp';


export class NovaServerInterfaceDetail {
    private 'fixed_ips'?: Array<NovaServerInterfaceFixedIp>;
    private 'mac_addr'?: string;
    private 'net_id'?: string;
    private 'port_id'?: string;
    private 'port_state'?: string;
    public constructor(fixedIps?: Array<NovaServerInterfaceFixedIp>, macAddr?: string, netId?: string, portId?: string, portState?: string) { 
        this['fixed_ips'] = fixedIps;
        this['mac_addr'] = macAddr;
        this['net_id'] = netId;
        this['port_id'] = portId;
        this['port_state'] = portState;
    }
    public withFixedIps(fixedIps: Array<NovaServerInterfaceFixedIp>): NovaServerInterfaceDetail {
        this['fixed_ips'] = fixedIps;
        return this;
    }
    public set fixedIps(fixedIps: Array<NovaServerInterfaceFixedIp>  | undefined) {
        this['fixed_ips'] = fixedIps;
    }
    public get fixedIps(): Array<NovaServerInterfaceFixedIp> | undefined {
        return this['fixed_ips'];
    }
    public withMacAddr(macAddr: string): NovaServerInterfaceDetail {
        this['mac_addr'] = macAddr;
        return this;
    }
    public set macAddr(macAddr: string  | undefined) {
        this['mac_addr'] = macAddr;
    }
    public get macAddr(): string | undefined {
        return this['mac_addr'];
    }
    public withNetId(netId: string): NovaServerInterfaceDetail {
        this['net_id'] = netId;
        return this;
    }
    public set netId(netId: string  | undefined) {
        this['net_id'] = netId;
    }
    public get netId(): string | undefined {
        return this['net_id'];
    }
    public withPortId(portId: string): NovaServerInterfaceDetail {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withPortState(portState: string): NovaServerInterfaceDetail {
        this['port_state'] = portState;
        return this;
    }
    public set portState(portState: string  | undefined) {
        this['port_state'] = portState;
    }
    public get portState(): string | undefined {
        return this['port_state'];
    }
}