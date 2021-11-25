

export class UpdatePublicipOption {
    private 'port_id'?: string | undefined;
    private 'ip_version'?: UpdatePublicipOptionIpVersionEnum | undefined;
    public alias?: string;
    public constructor() { 
    }
    public withPortId(portId: string): UpdatePublicipOption {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string | undefined) {
        this['port_id'] = portId;
    }
    public get portId() {
        return this['port_id'];
    }
    public withIpVersion(ipVersion: UpdatePublicipOptionIpVersionEnum): UpdatePublicipOption {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: UpdatePublicipOptionIpVersionEnum | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withAlias(alias: string): UpdatePublicipOption {
        this['alias'] = alias;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatePublicipOptionIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
