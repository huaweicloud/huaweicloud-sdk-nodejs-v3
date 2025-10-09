

export class AsymmetricSignature {
    private 'asymmetric_signature_switch'?: boolean;
    public constructor(asymmetricSignatureSwitch?: boolean) { 
        this['asymmetric_signature_switch'] = asymmetricSignatureSwitch;
    }
    public withAsymmetricSignatureSwitch(asymmetricSignatureSwitch: boolean): AsymmetricSignature {
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