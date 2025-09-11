import { FixedIp } from './FixedIp';


export class InterfaceExt {
    private 'preserve_on_delete'?: boolean;
    private 'port_state'?: string;
    private 'fixed_ips'?: Array<FixedIp>;
    private 'net_id'?: string;
    private 'port_id'?: string;
    private 'mac_addr'?: string;
    private 'delete_on_termination'?: boolean;
    private 'driver_mode'?: string;
    private 'min_rate'?: number;
    private 'multiqueue_num'?: number;
    private 'pci_address'?: string;
    public constructor() { 
    }
    public withPreserveOnDelete(preserveOnDelete: boolean): InterfaceExt {
        this['preserve_on_delete'] = preserveOnDelete;
        return this;
    }
    public set preserveOnDelete(preserveOnDelete: boolean  | undefined) {
        this['preserve_on_delete'] = preserveOnDelete;
    }
    public get preserveOnDelete(): boolean | undefined {
        return this['preserve_on_delete'];
    }
    public withPortState(portState: string): InterfaceExt {
        this['port_state'] = portState;
        return this;
    }
    public set portState(portState: string  | undefined) {
        this['port_state'] = portState;
    }
    public get portState(): string | undefined {
        return this['port_state'];
    }
    public withFixedIps(fixedIps: Array<FixedIp>): InterfaceExt {
        this['fixed_ips'] = fixedIps;
        return this;
    }
    public set fixedIps(fixedIps: Array<FixedIp>  | undefined) {
        this['fixed_ips'] = fixedIps;
    }
    public get fixedIps(): Array<FixedIp> | undefined {
        return this['fixed_ips'];
    }
    public withNetId(netId: string): InterfaceExt {
        this['net_id'] = netId;
        return this;
    }
    public set netId(netId: string  | undefined) {
        this['net_id'] = netId;
    }
    public get netId(): string | undefined {
        return this['net_id'];
    }
    public withPortId(portId: string): InterfaceExt {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withMacAddr(macAddr: string): InterfaceExt {
        this['mac_addr'] = macAddr;
        return this;
    }
    public set macAddr(macAddr: string  | undefined) {
        this['mac_addr'] = macAddr;
    }
    public get macAddr(): string | undefined {
        return this['mac_addr'];
    }
    public withDeleteOnTermination(deleteOnTermination: boolean): InterfaceExt {
        this['delete_on_termination'] = deleteOnTermination;
        return this;
    }
    public set deleteOnTermination(deleteOnTermination: boolean  | undefined) {
        this['delete_on_termination'] = deleteOnTermination;
    }
    public get deleteOnTermination(): boolean | undefined {
        return this['delete_on_termination'];
    }
    public withDriverMode(driverMode: string): InterfaceExt {
        this['driver_mode'] = driverMode;
        return this;
    }
    public set driverMode(driverMode: string  | undefined) {
        this['driver_mode'] = driverMode;
    }
    public get driverMode(): string | undefined {
        return this['driver_mode'];
    }
    public withMinRate(minRate: number): InterfaceExt {
        this['min_rate'] = minRate;
        return this;
    }
    public set minRate(minRate: number  | undefined) {
        this['min_rate'] = minRate;
    }
    public get minRate(): number | undefined {
        return this['min_rate'];
    }
    public withMultiqueueNum(multiqueueNum: number): InterfaceExt {
        this['multiqueue_num'] = multiqueueNum;
        return this;
    }
    public set multiqueueNum(multiqueueNum: number  | undefined) {
        this['multiqueue_num'] = multiqueueNum;
    }
    public get multiqueueNum(): number | undefined {
        return this['multiqueue_num'];
    }
    public withPciAddress(pciAddress: string): InterfaceExt {
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