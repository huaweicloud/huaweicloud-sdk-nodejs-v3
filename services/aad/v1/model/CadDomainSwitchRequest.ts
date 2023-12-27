

export class CadDomainSwitchRequest {
    private 'domain_id'?: string;
    private 'waf_switch'?: number;
    private 'cc_switch'?: number;
    public constructor(domainId?: string, wafSwitch?: number, ccSwitch?: number) { 
        this['domain_id'] = domainId;
        this['waf_switch'] = wafSwitch;
        this['cc_switch'] = ccSwitch;
    }
    public withDomainId(domainId: string): CadDomainSwitchRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withWafSwitch(wafSwitch: number): CadDomainSwitchRequest {
        this['waf_switch'] = wafSwitch;
        return this;
    }
    public set wafSwitch(wafSwitch: number  | undefined) {
        this['waf_switch'] = wafSwitch;
    }
    public get wafSwitch(): number | undefined {
        return this['waf_switch'];
    }
    public withCcSwitch(ccSwitch: number): CadDomainSwitchRequest {
        this['cc_switch'] = ccSwitch;
        return this;
    }
    public set ccSwitch(ccSwitch: number  | undefined) {
        this['cc_switch'] = ccSwitch;
    }
    public get ccSwitch(): number | undefined {
        return this['cc_switch'];
    }
}