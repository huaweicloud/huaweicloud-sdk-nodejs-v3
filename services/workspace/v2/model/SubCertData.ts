import { DistinguishedName } from './DistinguishedName';


export class SubCertData {
    private 'distinguished_name'?: DistinguishedName;
    private 'key_algorithm'?: string;
    private 'signature_algorithm'?: string;
    public constructor(distinguishedName?: DistinguishedName, keyAlgorithm?: string, signatureAlgorithm?: string) { 
        this['distinguished_name'] = distinguishedName;
        this['key_algorithm'] = keyAlgorithm;
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public withDistinguishedName(distinguishedName: DistinguishedName): SubCertData {
        this['distinguished_name'] = distinguishedName;
        return this;
    }
    public set distinguishedName(distinguishedName: DistinguishedName  | undefined) {
        this['distinguished_name'] = distinguishedName;
    }
    public get distinguishedName(): DistinguishedName | undefined {
        return this['distinguished_name'];
    }
    public withKeyAlgorithm(keyAlgorithm: string): SubCertData {
        this['key_algorithm'] = keyAlgorithm;
        return this;
    }
    public set keyAlgorithm(keyAlgorithm: string  | undefined) {
        this['key_algorithm'] = keyAlgorithm;
    }
    public get keyAlgorithm(): string | undefined {
        return this['key_algorithm'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): SubCertData {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
}