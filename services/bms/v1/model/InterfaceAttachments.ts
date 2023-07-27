import { FixedIps } from './FixedIps';


export class InterfaceAttachments {
    private 'port_state'?: InterfaceAttachmentsPortStateEnum | string;
    private 'fixed_ips'?: Array<FixedIps>;
    private 'net_id'?: string;
    private 'port_id'?: string;
    private 'mac_addr'?: string;
    private 'driver_mode'?: string;
    private 'pci_address'?: string;
    public constructor() { 
    }
    public withPortState(portState: InterfaceAttachmentsPortStateEnum | string): InterfaceAttachments {
        this['port_state'] = portState;
        return this;
    }
    public set portState(portState: InterfaceAttachmentsPortStateEnum | string  | undefined) {
        this['port_state'] = portState;
    }
    public get portState(): InterfaceAttachmentsPortStateEnum | string | undefined {
        return this['port_state'];
    }
    public withFixedIps(fixedIps: Array<FixedIps>): InterfaceAttachments {
        this['fixed_ips'] = fixedIps;
        return this;
    }
    public set fixedIps(fixedIps: Array<FixedIps>  | undefined) {
        this['fixed_ips'] = fixedIps;
    }
    public get fixedIps(): Array<FixedIps> | undefined {
        return this['fixed_ips'];
    }
    public withNetId(netId: string): InterfaceAttachments {
        this['net_id'] = netId;
        return this;
    }
    public set netId(netId: string  | undefined) {
        this['net_id'] = netId;
    }
    public get netId(): string | undefined {
        return this['net_id'];
    }
    public withPortId(portId: string): InterfaceAttachments {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withMacAddr(macAddr: string): InterfaceAttachments {
        this['mac_addr'] = macAddr;
        return this;
    }
    public set macAddr(macAddr: string  | undefined) {
        this['mac_addr'] = macAddr;
    }
    public get macAddr(): string | undefined {
        return this['mac_addr'];
    }
    public withDriverMode(driverMode: string): InterfaceAttachments {
        this['driver_mode'] = driverMode;
        return this;
    }
    public set driverMode(driverMode: string  | undefined) {
        this['driver_mode'] = driverMode;
    }
    public get driverMode(): string | undefined {
        return this['driver_mode'];
    }
    public withPciAddress(pciAddress: string): InterfaceAttachments {
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

/**
    * @export
    * @enum {string}
    */
export enum InterfaceAttachmentsPortStateEnum {
    ACTIVE = 'ACTIVE',
    BUILD = 'BUILD',
    DOWN = 'DOWN'
}
