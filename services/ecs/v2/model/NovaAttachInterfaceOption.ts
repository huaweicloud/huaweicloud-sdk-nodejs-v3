import { NovaAttachInterfaceFixedIp } from './NovaAttachInterfaceFixedIp';


export class NovaAttachInterfaceOption {
    private 'fixed_ips'?: Array<NovaAttachInterfaceFixedIp>;
    private 'net_id'?: string;
    private 'port_id'?: string;
    public constructor() { 
    }
    public withFixedIps(fixedIps: Array<NovaAttachInterfaceFixedIp>): NovaAttachInterfaceOption {
        this['fixed_ips'] = fixedIps;
        return this;
    }
    public set fixedIps(fixedIps: Array<NovaAttachInterfaceFixedIp>  | undefined) {
        this['fixed_ips'] = fixedIps;
    }
    public get fixedIps(): Array<NovaAttachInterfaceFixedIp> | undefined {
        return this['fixed_ips'];
    }
    public withNetId(netId: string): NovaAttachInterfaceOption {
        this['net_id'] = netId;
        return this;
    }
    public set netId(netId: string  | undefined) {
        this['net_id'] = netId;
    }
    public get netId(): string | undefined {
        return this['net_id'];
    }
    public withPortId(portId: string): NovaAttachInterfaceOption {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
}