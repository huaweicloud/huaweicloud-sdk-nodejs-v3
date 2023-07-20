

export class CreatePrePaidPublicipOption {
    public type?: string;
    private 'ip_version'?: CreatePrePaidPublicipOptionIpVersionEnum | number;
    public alias?: string;
    private 'port_id'?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): CreatePrePaidPublicipOption {
        this['type'] = type;
        return this;
    }
    public withIpVersion(ipVersion: CreatePrePaidPublicipOptionIpVersionEnum | number): CreatePrePaidPublicipOption {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: CreatePrePaidPublicipOptionIpVersionEnum | number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): CreatePrePaidPublicipOptionIpVersionEnum | number | undefined {
        return this['ip_version'];
    }
    public withAlias(alias: string): CreatePrePaidPublicipOption {
        this['alias'] = alias;
        return this;
    }
    public withPortId(portId: string): CreatePrePaidPublicipOption {
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
export enum CreatePrePaidPublicipOptionIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
