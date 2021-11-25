

export class CreatePublicipOption {
    private 'ip_address'?: string | undefined;
    public type: string;
    private 'ip_version'?: CreatePublicipOptionIpVersionEnum | undefined;
    public alias?: string;
    public constructor(type?: any) { 
        this['type'] = type;
    }
    public withIpAddress(ipAddress: string): CreatePublicipOption {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress() {
        return this['ip_address'];
    }
    public withType(type: string): CreatePublicipOption {
        this['type'] = type;
        return this;
    }
    public withIpVersion(ipVersion: CreatePublicipOptionIpVersionEnum): CreatePublicipOption {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: CreatePublicipOptionIpVersionEnum | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withAlias(alias: string): CreatePublicipOption {
        this['alias'] = alias;
        return this;
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
