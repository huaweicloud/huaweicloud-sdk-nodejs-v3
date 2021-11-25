

export class CreatePrePaidPublicipOption {
    public type: string;
    private 'ip_version'?: number | undefined;
    public alias?: string;
    public constructor(type?: any) { 
        this['type'] = type;
    }
    public withType(type: string): CreatePrePaidPublicipOption {
        this['type'] = type;
        return this;
    }
    public withIpVersion(ipVersion: number): CreatePrePaidPublicipOption {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withAlias(alias: string): CreatePrePaidPublicipOption {
        this['alias'] = alias;
        return this;
    }
}