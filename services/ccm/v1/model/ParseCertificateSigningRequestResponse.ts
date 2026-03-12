import { DistinguishedName } from './DistinguishedName';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ParseCertificateSigningRequestResponse extends SdkResponse {
    private 'key_algorithm'?: string;
    private 'key_algorithm_length'?: number;
    private 'signature_algorithm'?: string;
    private 'public_key'?: string;
    private 'distinguished_name'?: DistinguishedName;
    public constructor() { 
        super();
    }
    public withKeyAlgorithm(keyAlgorithm: string): ParseCertificateSigningRequestResponse {
        this['key_algorithm'] = keyAlgorithm;
        return this;
    }
    public set keyAlgorithm(keyAlgorithm: string  | undefined) {
        this['key_algorithm'] = keyAlgorithm;
    }
    public get keyAlgorithm(): string | undefined {
        return this['key_algorithm'];
    }
    public withKeyAlgorithmLength(keyAlgorithmLength: number): ParseCertificateSigningRequestResponse {
        this['key_algorithm_length'] = keyAlgorithmLength;
        return this;
    }
    public set keyAlgorithmLength(keyAlgorithmLength: number  | undefined) {
        this['key_algorithm_length'] = keyAlgorithmLength;
    }
    public get keyAlgorithmLength(): number | undefined {
        return this['key_algorithm_length'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): ParseCertificateSigningRequestResponse {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withPublicKey(publicKey: string): ParseCertificateSigningRequestResponse {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string  | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey(): string | undefined {
        return this['public_key'];
    }
    public withDistinguishedName(distinguishedName: DistinguishedName): ParseCertificateSigningRequestResponse {
        this['distinguished_name'] = distinguishedName;
        return this;
    }
    public set distinguishedName(distinguishedName: DistinguishedName  | undefined) {
        this['distinguished_name'] = distinguishedName;
    }
    public get distinguishedName(): DistinguishedName | undefined {
        return this['distinguished_name'];
    }
}