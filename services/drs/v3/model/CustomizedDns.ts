

export class CustomizedDns {
    private 'is_set_dns'?: boolean;
    private 'set_dns_action'?: CustomizedDnsSetDnsActionEnum | string;
    private 'dns_ip'?: string;
    public constructor(isSetDns?: boolean, setDnsAction?: string, dnsIp?: string) { 
        this['is_set_dns'] = isSetDns;
        this['set_dns_action'] = setDnsAction;
        this['dns_ip'] = dnsIp;
    }
    public withIsSetDns(isSetDns: boolean): CustomizedDns {
        this['is_set_dns'] = isSetDns;
        return this;
    }
    public set isSetDns(isSetDns: boolean  | undefined) {
        this['is_set_dns'] = isSetDns;
    }
    public get isSetDns(): boolean | undefined {
        return this['is_set_dns'];
    }
    public withSetDnsAction(setDnsAction: CustomizedDnsSetDnsActionEnum | string): CustomizedDns {
        this['set_dns_action'] = setDnsAction;
        return this;
    }
    public set setDnsAction(setDnsAction: CustomizedDnsSetDnsActionEnum | string  | undefined) {
        this['set_dns_action'] = setDnsAction;
    }
    public get setDnsAction(): CustomizedDnsSetDnsActionEnum | string | undefined {
        return this['set_dns_action'];
    }
    public withDnsIp(dnsIp: string): CustomizedDns {
        this['dns_ip'] = dnsIp;
        return this;
    }
    public set dnsIp(dnsIp: string  | undefined) {
        this['dns_ip'] = dnsIp;
    }
    public get dnsIp(): string | undefined {
        return this['dns_ip'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CustomizedDnsSetDnsActionEnum {
    ADD = 'add',
    KEEP = 'keep',
    UPDATE = 'update',
    RECOVER = 'recover'
}
