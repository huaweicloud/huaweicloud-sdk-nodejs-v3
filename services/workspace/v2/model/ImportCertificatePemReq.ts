import { CrlConfigurationData } from './CrlConfigurationData';
import { DistinguishedName } from './DistinguishedName';
import { SubCertData } from './SubCertData';


export class ImportCertificatePemReq {
    private 'distinguished_name'?: DistinguishedName;
    private 'key_algorithm'?: string;
    private 'transaction_id'?: string;
    private 'crl_configuration'?: CrlConfigurationData;
    private 'pem_code'?: string;
    public constructor(distinguishedName?: DistinguishedName, keyAlgorithm?: string) { 
        this['distinguished_name'] = distinguishedName;
        this['key_algorithm'] = keyAlgorithm;
    }
    public withDistinguishedName(distinguishedName: DistinguishedName): ImportCertificatePemReq {
        this['distinguished_name'] = distinguishedName;
        return this;
    }
    public set distinguishedName(distinguishedName: DistinguishedName  | undefined) {
        this['distinguished_name'] = distinguishedName;
    }
    public get distinguishedName(): DistinguishedName | undefined {
        return this['distinguished_name'];
    }
    public withKeyAlgorithm(keyAlgorithm: string): ImportCertificatePemReq {
        this['key_algorithm'] = keyAlgorithm;
        return this;
    }
    public set keyAlgorithm(keyAlgorithm: string  | undefined) {
        this['key_algorithm'] = keyAlgorithm;
    }
    public get keyAlgorithm(): string | undefined {
        return this['key_algorithm'];
    }
    public withTransactionId(transactionId: string): ImportCertificatePemReq {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withCrlConfiguration(crlConfiguration: CrlConfigurationData): ImportCertificatePemReq {
        this['crl_configuration'] = crlConfiguration;
        return this;
    }
    public set crlConfiguration(crlConfiguration: CrlConfigurationData  | undefined) {
        this['crl_configuration'] = crlConfiguration;
    }
    public get crlConfiguration(): CrlConfigurationData | undefined {
        return this['crl_configuration'];
    }
    public withPemCode(pemCode: string): ImportCertificatePemReq {
        this['pem_code'] = pemCode;
        return this;
    }
    public set pemCode(pemCode: string  | undefined) {
        this['pem_code'] = pemCode;
    }
    public get pemCode(): string | undefined {
        return this['pem_code'];
    }
}