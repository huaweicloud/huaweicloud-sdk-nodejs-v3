

export class AsymmetricSignatureWithDomainId {
    private 'domain_id'?: string;
    private 'asymmetric_signature_switch'?: boolean;
    public constructor(domainId?: string, asymmetricSignatureSwitch?: boolean) { 
        this['domain_id'] = domainId;
        this['asymmetric_signature_switch'] = asymmetricSignatureSwitch;
    }
    public withDomainId(domainId: string): AsymmetricSignatureWithDomainId {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withAsymmetricSignatureSwitch(asymmetricSignatureSwitch: boolean): AsymmetricSignatureWithDomainId {
        this['asymmetric_signature_switch'] = asymmetricSignatureSwitch;
        return this;
    }
    public set asymmetricSignatureSwitch(asymmetricSignatureSwitch: boolean  | undefined) {
        this['asymmetric_signature_switch'] = asymmetricSignatureSwitch;
    }
    public get asymmetricSignatureSwitch(): boolean | undefined {
        return this['asymmetric_signature_switch'];
    }
}