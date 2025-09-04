

export class ActiveStandbyConfigDTO {
    private 'work_node'?: string;
    private 'master_interface_name'?: string;
    private 'slave_interface_name'?: string;
    private 'virtual_ip_address'?: string;
    private 'virtual_ipv6_address'?: string;
    public constructor() { 
    }
    public withWorkNode(workNode: string): ActiveStandbyConfigDTO {
        this['work_node'] = workNode;
        return this;
    }
    public set workNode(workNode: string  | undefined) {
        this['work_node'] = workNode;
    }
    public get workNode(): string | undefined {
        return this['work_node'];
    }
    public withMasterInterfaceName(masterInterfaceName: string): ActiveStandbyConfigDTO {
        this['master_interface_name'] = masterInterfaceName;
        return this;
    }
    public set masterInterfaceName(masterInterfaceName: string  | undefined) {
        this['master_interface_name'] = masterInterfaceName;
    }
    public get masterInterfaceName(): string | undefined {
        return this['master_interface_name'];
    }
    public withSlaveInterfaceName(slaveInterfaceName: string): ActiveStandbyConfigDTO {
        this['slave_interface_name'] = slaveInterfaceName;
        return this;
    }
    public set slaveInterfaceName(slaveInterfaceName: string  | undefined) {
        this['slave_interface_name'] = slaveInterfaceName;
    }
    public get slaveInterfaceName(): string | undefined {
        return this['slave_interface_name'];
    }
    public withVirtualIpAddress(virtualIpAddress: string): ActiveStandbyConfigDTO {
        this['virtual_ip_address'] = virtualIpAddress;
        return this;
    }
    public set virtualIpAddress(virtualIpAddress: string  | undefined) {
        this['virtual_ip_address'] = virtualIpAddress;
    }
    public get virtualIpAddress(): string | undefined {
        return this['virtual_ip_address'];
    }
    public withVirtualIpv6Address(virtualIpv6Address: string): ActiveStandbyConfigDTO {
        this['virtual_ipv6_address'] = virtualIpv6Address;
        return this;
    }
    public set virtualIpv6Address(virtualIpv6Address: string  | undefined) {
        this['virtual_ipv6_address'] = virtualIpv6Address;
    }
    public get virtualIpv6Address(): string | undefined {
        return this['virtual_ipv6_address'];
    }
}