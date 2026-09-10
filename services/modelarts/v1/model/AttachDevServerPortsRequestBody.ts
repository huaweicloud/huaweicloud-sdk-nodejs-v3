

export class AttachDevServerPortsRequestBody {
    private 'port_id'?: string;
    public name?: string;
    private 'network_id'?: string;
    private 'ip_address'?: string;
    private 'security_groups'?: Array<string>;
    private 'enable_efi'?: boolean;
    private 'efi_protocol'?: string;
    public constructor() { 
    }
    public withPortId(portId: string): AttachDevServerPortsRequestBody {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withName(name: string): AttachDevServerPortsRequestBody {
        this['name'] = name;
        return this;
    }
    public withNetworkId(networkId: string): AttachDevServerPortsRequestBody {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
    public withIpAddress(ipAddress: string): AttachDevServerPortsRequestBody {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withSecurityGroups(securityGroups: Array<string>): AttachDevServerPortsRequestBody {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<string> | undefined {
        return this['security_groups'];
    }
    public withEnableEfi(enableEfi: boolean): AttachDevServerPortsRequestBody {
        this['enable_efi'] = enableEfi;
        return this;
    }
    public set enableEfi(enableEfi: boolean  | undefined) {
        this['enable_efi'] = enableEfi;
    }
    public get enableEfi(): boolean | undefined {
        return this['enable_efi'];
    }
    public withEfiProtocol(efiProtocol: string): AttachDevServerPortsRequestBody {
        this['efi_protocol'] = efiProtocol;
        return this;
    }
    public set efiProtocol(efiProtocol: string  | undefined) {
        this['efi_protocol'] = efiProtocol;
    }
    public get efiProtocol(): string | undefined {
        return this['efi_protocol'];
    }
}