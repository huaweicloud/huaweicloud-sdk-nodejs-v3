

export class IpExchangeRequest {
    private 'exchanged_ip'?: Array<string>;
    private 'is_exchange_domain'?: boolean;
    public constructor(exchangedIp?: Array<string>, isExchangeDomain?: boolean) { 
        this['exchanged_ip'] = exchangedIp;
        this['is_exchange_domain'] = isExchangeDomain;
    }
    public withExchangedIp(exchangedIp: Array<string>): IpExchangeRequest {
        this['exchanged_ip'] = exchangedIp;
        return this;
    }
    public set exchangedIp(exchangedIp: Array<string>  | undefined) {
        this['exchanged_ip'] = exchangedIp;
    }
    public get exchangedIp(): Array<string> | undefined {
        return this['exchanged_ip'];
    }
    public withIsExchangeDomain(isExchangeDomain: boolean): IpExchangeRequest {
        this['is_exchange_domain'] = isExchangeDomain;
        return this;
    }
    public set isExchangeDomain(isExchangeDomain: boolean  | undefined) {
        this['is_exchange_domain'] = isExchangeDomain;
    }
    public get isExchangeDomain(): boolean | undefined {
        return this['is_exchange_domain'];
    }
}