

export class CreatePrePaidPublicipOption {
    public type: string;
    private 'ip_version'?: CreatePrePaidPublicipOptionIpVersionEnum | undefined;
    public constructor(type?: any) { 
        this['type'] = type;
    }
    public withType(type: string): CreatePrePaidPublicipOption {
        this['type'] = type;
        return this;
    }
    public withIpVersion(ipVersion: CreatePrePaidPublicipOptionIpVersionEnum): CreatePrePaidPublicipOption {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: CreatePrePaidPublicipOptionIpVersionEnum | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
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
