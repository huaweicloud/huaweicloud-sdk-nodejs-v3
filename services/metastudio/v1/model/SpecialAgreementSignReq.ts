

export class SpecialAgreementSignReq {
    private 'agreement_type'?: string;
    private 'to_sign'?: boolean;
    public constructor(agreementType?: string, toSign?: boolean) { 
        this['agreement_type'] = agreementType;
        this['to_sign'] = toSign;
    }
    public withAgreementType(agreementType: string): SpecialAgreementSignReq {
        this['agreement_type'] = agreementType;
        return this;
    }
    public set agreementType(agreementType: string  | undefined) {
        this['agreement_type'] = agreementType;
    }
    public get agreementType(): string | undefined {
        return this['agreement_type'];
    }
    public withToSign(toSign: boolean): SpecialAgreementSignReq {
        this['to_sign'] = toSign;
        return this;
    }
    public set toSign(toSign: boolean  | undefined) {
        this['to_sign'] = toSign;
    }
    public get toSign(): boolean | undefined {
        return this['to_sign'];
    }
}