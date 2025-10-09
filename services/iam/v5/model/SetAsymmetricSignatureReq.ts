import { AsymmetricSignature } from './AsymmetricSignature';


export class SetAsymmetricSignatureReq {
    private 'asymmetric_signature'?: AsymmetricSignature;
    public constructor(asymmetricSignature?: AsymmetricSignature) { 
        this['asymmetric_signature'] = asymmetricSignature;
    }
    public withAsymmetricSignature(asymmetricSignature: AsymmetricSignature): SetAsymmetricSignatureReq {
        this['asymmetric_signature'] = asymmetricSignature;
        return this;
    }
    public set asymmetricSignature(asymmetricSignature: AsymmetricSignature  | undefined) {
        this['asymmetric_signature'] = asymmetricSignature;
    }
    public get asymmetricSignature(): AsymmetricSignature | undefined {
        return this['asymmetric_signature'];
    }
}