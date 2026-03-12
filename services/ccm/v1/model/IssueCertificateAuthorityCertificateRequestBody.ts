import { CrlConfiguration } from './CrlConfiguration';
import { DistinguishedName } from './DistinguishedName';
import { HsmClusterInfo } from './HsmClusterInfo';
import { Validity } from './Validity';


export class IssueCertificateAuthorityCertificateRequestBody {
    private 'issuer_id'?: string;
    private 'path_length'?: number;
    private 'signature_algorithm'?: string;
    public validity?: Validity;
    public type?: string;
    private 'distinguished_name'?: DistinguishedName;
    private 'key_algorithm'?: string;
    private 'key_usages'?: Array<string>;
    private 'crl_configuration'?: CrlConfiguration;
    private 'enterprise_project_id'?: string;
    private 'hsm_cluster_info'?: HsmClusterInfo;
    public constructor(issuerId?: string, signatureAlgorithm?: string, validity?: Validity) { 
        this['issuer_id'] = issuerId;
        this['signature_algorithm'] = signatureAlgorithm;
        this['validity'] = validity;
    }
    public withIssuerId(issuerId: string): IssueCertificateAuthorityCertificateRequestBody {
        this['issuer_id'] = issuerId;
        return this;
    }
    public set issuerId(issuerId: string  | undefined) {
        this['issuer_id'] = issuerId;
    }
    public get issuerId(): string | undefined {
        return this['issuer_id'];
    }
    public withPathLength(pathLength: number): IssueCertificateAuthorityCertificateRequestBody {
        this['path_length'] = pathLength;
        return this;
    }
    public set pathLength(pathLength: number  | undefined) {
        this['path_length'] = pathLength;
    }
    public get pathLength(): number | undefined {
        return this['path_length'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): IssueCertificateAuthorityCertificateRequestBody {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withValidity(validity: Validity): IssueCertificateAuthorityCertificateRequestBody {
        this['validity'] = validity;
        return this;
    }
    public withType(type: string): IssueCertificateAuthorityCertificateRequestBody {
        this['type'] = type;
        return this;
    }
    public withDistinguishedName(distinguishedName: DistinguishedName): IssueCertificateAuthorityCertificateRequestBody {
        this['distinguished_name'] = distinguishedName;
        return this;
    }
    public set distinguishedName(distinguishedName: DistinguishedName  | undefined) {
        this['distinguished_name'] = distinguishedName;
    }
    public get distinguishedName(): DistinguishedName | undefined {
        return this['distinguished_name'];
    }
    public withKeyAlgorithm(keyAlgorithm: string): IssueCertificateAuthorityCertificateRequestBody {
        this['key_algorithm'] = keyAlgorithm;
        return this;
    }
    public set keyAlgorithm(keyAlgorithm: string  | undefined) {
        this['key_algorithm'] = keyAlgorithm;
    }
    public get keyAlgorithm(): string | undefined {
        return this['key_algorithm'];
    }
    public withKeyUsages(keyUsages: Array<string>): IssueCertificateAuthorityCertificateRequestBody {
        this['key_usages'] = keyUsages;
        return this;
    }
    public set keyUsages(keyUsages: Array<string>  | undefined) {
        this['key_usages'] = keyUsages;
    }
    public get keyUsages(): Array<string> | undefined {
        return this['key_usages'];
    }
    public withCrlConfiguration(crlConfiguration: CrlConfiguration): IssueCertificateAuthorityCertificateRequestBody {
        this['crl_configuration'] = crlConfiguration;
        return this;
    }
    public set crlConfiguration(crlConfiguration: CrlConfiguration  | undefined) {
        this['crl_configuration'] = crlConfiguration;
    }
    public get crlConfiguration(): CrlConfiguration | undefined {
        return this['crl_configuration'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): IssueCertificateAuthorityCertificateRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHsmClusterInfo(hsmClusterInfo: HsmClusterInfo): IssueCertificateAuthorityCertificateRequestBody {
        this['hsm_cluster_info'] = hsmClusterInfo;
        return this;
    }
    public set hsmClusterInfo(hsmClusterInfo: HsmClusterInfo  | undefined) {
        this['hsm_cluster_info'] = hsmClusterInfo;
    }
    public get hsmClusterInfo(): HsmClusterInfo | undefined {
        return this['hsm_cluster_info'];
    }
}