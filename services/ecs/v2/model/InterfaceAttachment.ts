import { ServerInterfaceFixedIp } from './ServerInterfaceFixedIp';


export class InterfaceAttachment {
    private 'fixed_ips'?: Array<ServerInterfaceFixedIp>;
    private 'mac_addr'?: string;
    private 'net_id'?: string;
    private 'port_id'?: string;
    private 'port_state'?: string;
    private 'delete_on_termination'?: boolean;
    private 'driver_mode'?: string;
    private 'min_rate'?: number;
    private 'multiqueue_num'?: number;
    private 'pci_address'?: string;
    public constructor() { 
    }
    public withFixedIps(fixedIps: Array<ServerInterfaceFixedIp>): InterfaceAttachment {
        this['fixed_ips'] = fixedIps;
        return this;
    }
    public set fixedIps(fixedIps: Array<ServerInterfaceFixedIp>  | undefined) {
        this['fixed_ips'] = fixedIps;
    }
    public get fixedIps(): Array<ServerInterfaceFixedIp> | undefined {
        return this['fixed_ips'];
    }
    public withMacAddr(macAddr: string): InterfaceAttachment {
        this['mac_addr'] = macAddr;
        return this;
    }
    public set macAddr(macAddr: string  | undefined) {
        this['mac_addr'] = macAddr;
    }
    public get macAddr(): string | undefined {
        return this['mac_addr'];
    }
    public withNetId(netId: string): InterfaceAttachment {
        this['net_id'] = netId;
        return this;
    }
    public set netId(netId: string  | undefined) {
        this['net_id'] = netId;
    }
    public get netId(): string | undefined {
        return this['net_id'];
    }
    public withPortId(portId: string): InterfaceAttachment {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withPortState(portState: string): InterfaceAttachment {
        this['port_state'] = portState;
        return this;
    }
    public set portState(portState: string  | undefined) {
        this['port_state'] = portState;
    }
    public get portState(): string | undefined {
        return this['port_state'];
    }
    public withDeleteOnTermination(deleteOnTermination: boolean): InterfaceAttachment {
        this['delete_on_termination'] = deleteOnTermination;
        return this;
    }
    public set deleteOnTermination(deleteOnTermination: boolean  | undefined) {
        this['delete_on_termination'] = deleteOnTermination;
    }
    public get deleteOnTermination(): boolean | undefined {
        return this['delete_on_termination'];
    }
    public withDriverMode(driverMode: string): InterfaceAttachment {
        this['driver_mode'] = driverMode;
        return this;
    }
    public set driverMode(driverMode: string  | undefined) {
        this['driver_mode'] = driverMode;
    }
    public get driverMode(): string | undefined {
        return this['driver_mode'];
    }
    public withMinRate(minRate: number): InterfaceAttachment {
        this['min_rate'] = minRate;
        return this;
    }
    public set minRate(minRate: number  | undefined) {
        this['min_rate'] = minRate;
    }
    public get minRate(): number | undefined {
        return this['min_rate'];
    }
    public withMultiqueueNum(multiqueueNum: number): InterfaceAttachment {
        this['multiqueue_num'] = multiqueueNum;
        return this;
    }
    public set multiqueueNum(multiqueueNum: number  | undefined) {
        this['multiqueue_num'] = multiqueueNum;
    }
    public get multiqueueNum(): number | undefined {
        return this['multiqueue_num'];
    }
    public withPciAddress(pciAddress: string): InterfaceAttachment {
        this['pci_address'] = pciAddress;
        return this;
    }
    public set pciAddress(pciAddress: string  | undefined) {
        this['pci_address'] = pciAddress;
    }
    public get pciAddress(): string | undefined {
        return this['pci_address'];
    }
}