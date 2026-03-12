import { CertDistinguishedName } from './CertDistinguishedName';
import { CustomizedExtension } from './CustomizedExtension';
import { ExtendedKeyUsage } from './ExtendedKeyUsage';
import { SubjectAlternativeName } from './SubjectAlternativeName';
import { Validity } from './Validity';


export class CreateCertificateRequestBody {
    private 'issuer_id'?: string;
    private 'key_algorithm'?: string;
    private 'signature_algorithm'?: string;
    private 'distinguished_name'?: CertDistinguishedName;
    public validity?: Validity;
    private 'key_usages'?: Array<string>;
    private 'subject_alternative_names'?: Array<SubjectAlternativeName>;
    private 'extended_key_usage'?: ExtendedKeyUsage;
    private 'customized_extension'?: CustomizedExtension;
    private 'enterprise_project_id'?: string;
    public constructor(issuerId?: string, distinguishedName?: CertDistinguishedName, validity?: Validity) { 
        this['issuer_id'] = issuerId;
        this['distinguished_name'] = distinguishedName;
        this['validity'] = validity;
    }
    public withIssuerId(issuerId: string): CreateCertificateRequestBody {
        this['issuer_id'] = issuerId;
        return this;
    }
    public set issuerId(issuerId: string  | undefined) {
        this['issuer_id'] = issuerId;
    }
    public get issuerId(): string | undefined {
        return this['issuer_id'];
    }
    public withKeyAlgorithm(keyAlgorithm: string): CreateCertificateRequestBody {
        this['key_algorithm'] = keyAlgorithm;
        return this;
    }
    public set keyAlgorithm(keyAlgorithm: string  | undefined) {
        this['key_algorithm'] = keyAlgorithm;
    }
    public get keyAlgorithm(): string | undefined {
        return this['key_algorithm'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): CreateCertificateRequestBody {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withDistinguishedName(distinguishedName: CertDistinguishedName): CreateCertificateRequestBody {
        this['distinguished_name'] = distinguishedName;
        return this;
    }
    public set distinguishedName(distinguishedName: CertDistinguishedName  | undefined) {
        this['distinguished_name'] = distinguishedName;
    }
    public get distinguishedName(): CertDistinguishedName | undefined {
        return this['distinguished_name'];
    }
    public withValidity(validity: Validity): CreateCertificateRequestBody {
        this['validity'] = validity;
        return this;
    }
    public withKeyUsages(keyUsages: Array<string>): CreateCertificateRequestBody {
        this['key_usages'] = keyUsages;
        return this;
    }
    public set keyUsages(keyUsages: Array<string>  | undefined) {
        this['key_usages'] = keyUsages;
    }
    public get keyUsages(): Array<string> | undefined {
        return this['key_usages'];
    }
    public withSubjectAlternativeNames(subjectAlternativeNames: Array<SubjectAlternativeName>): CreateCertificateRequestBody {
        this['subject_alternative_names'] = subjectAlternativeNames;
        return this;
    }
    public set subjectAlternativeNames(subjectAlternativeNames: Array<SubjectAlternativeName>  | undefined) {
        this['subject_alternative_names'] = subjectAlternativeNames;
    }
    public get subjectAlternativeNames(): Array<SubjectAlternativeName> | undefined {
        return this['subject_alternative_names'];
    }
    public withExtendedKeyUsage(extendedKeyUsage: ExtendedKeyUsage): CreateCertificateRequestBody {
        this['extended_key_usage'] = extendedKeyUsage;
        return this;
    }
    public set extendedKeyUsage(extendedKeyUsage: ExtendedKeyUsage  | undefined) {
        this['extended_key_usage'] = extendedKeyUsage;
    }
    public get extendedKeyUsage(): ExtendedKeyUsage | undefined {
        return this['extended_key_usage'];
    }
    public withCustomizedExtension(customizedExtension: CustomizedExtension): CreateCertificateRequestBody {
        this['customized_extension'] = customizedExtension;
        return this;
    }
    public set customizedExtension(customizedExtension: CustomizedExtension  | undefined) {
        this['customized_extension'] = customizedExtension;
    }
    public get customizedExtension(): CustomizedExtension | undefined {
        return this['customized_extension'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateCertificateRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}