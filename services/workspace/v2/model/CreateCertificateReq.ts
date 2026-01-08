import { CertValidityData } from './CertValidityData';
import { CrlConfigurationData } from './CrlConfigurationData';
import { DistinguishedName } from './DistinguishedName';


export class CreateCertificateReq {
    private 'distinguished_name'?: DistinguishedName;
    private 'key_algorithm'?: string;
    private 'signature_algorithm'?: string;
    public validity?: CertValidityData;
    private 'crl_configuration'?: CrlConfigurationData;
    public constructor(distinguishedName?: DistinguishedName, keyAlgorithm?: string, signatureAlgorithm?: string, validity?: CertValidityData, crlConfiguration?: CrlConfigurationData) { 
        this['distinguished_name'] = distinguishedName;
        this['key_algorithm'] = keyAlgorithm;
        this['signature_algorithm'] = signatureAlgorithm;
        this['validity'] = validity;
        this['crl_configuration'] = crlConfiguration;
    }
    public withDistinguishedName(distinguishedName: DistinguishedName): CreateCertificateReq {
        this['distinguished_name'] = distinguishedName;
        return this;
    }
    public set distinguishedName(distinguishedName: DistinguishedName  | undefined) {
        this['distinguished_name'] = distinguishedName;
    }
    public get distinguishedName(): DistinguishedName | undefined {
        return this['distinguished_name'];
    }
    public withKeyAlgorithm(keyAlgorithm: string): CreateCertificateReq {
        this['key_algorithm'] = keyAlgorithm;
        return this;
    }
    public set keyAlgorithm(keyAlgorithm: string  | undefined) {
        this['key_algorithm'] = keyAlgorithm;
    }
    public get keyAlgorithm(): string | undefined {
        return this['key_algorithm'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): CreateCertificateReq {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withValidity(validity: CertValidityData): CreateCertificateReq {
        this['validity'] = validity;
        return this;
    }
    public withCrlConfiguration(crlConfiguration: CrlConfigurationData): CreateCertificateReq {
        this['crl_configuration'] = crlConfiguration;
        return this;
    }
    public set crlConfiguration(crlConfiguration: CrlConfigurationData  | undefined) {
        this['crl_configuration'] = crlConfiguration;
    }
    public get crlConfiguration(): CrlConfigurationData | undefined {
        return this['crl_configuration'];
    }
}