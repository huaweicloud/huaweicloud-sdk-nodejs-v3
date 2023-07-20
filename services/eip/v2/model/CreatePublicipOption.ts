

export class CreatePublicipOption {
    private 'ip_address'?: string;
    public type?: string;
    private 'ip_version'?: CreatePublicipOptionIpVersionEnum | number;
    public alias?: string;
    private 'port_id'?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withIpAddress(ipAddress: string): CreatePublicipOption {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withType(type: string): CreatePublicipOption {
        this['type'] = type;
        return this;
    }
    public withIpVersion(ipVersion: CreatePublicipOptionIpVersionEnum | number): CreatePublicipOption {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: CreatePublicipOptionIpVersionEnum | number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): CreatePublicipOptionIpVersionEnum | number | undefined {
        return this['ip_version'];
    }
    public withAlias(alias: string): CreatePublicipOption {
        this['alias'] = alias;
        return this;
    }
    public withPortId(portId: string): CreatePublicipOption {
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

/**
    * @export
    * @enum {string}
    */
export enum CreatePublicipOptionIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
