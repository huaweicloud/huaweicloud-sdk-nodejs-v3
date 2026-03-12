import { CrlConfiguration } from './CrlConfiguration';
import { DistinguishedName } from './DistinguishedName';
import { HsmClusterInfo } from './HsmClusterInfo';
import { Validity } from './Validity';


export class CreateCertificateAuthorityRequestBody {
    public type?: string;
    private 'distinguished_name'?: DistinguishedName;
    private 'key_algorithm'?: string;
    public validity?: Validity;
    private 'issuer_id'?: string;
    private 'path_length'?: number;
    private 'signature_algorithm'?: string;
    private 'key_usages'?: Array<string>;
    private 'crl_configuration'?: CrlConfiguration;
    private 'enterprise_project_id'?: string;
    private 'ca_id'?: string;
    private 'hsm_cluster_info'?: HsmClusterInfo;
    public constructor(type?: string, distinguishedName?: DistinguishedName, keyAlgorithm?: string) { 
        this['type'] = type;
        this['distinguished_name'] = distinguishedName;
        this['key_algorithm'] = keyAlgorithm;
    }
    public withType(type: string): CreateCertificateAuthorityRequestBody {
        this['type'] = type;
        return this;
    }
    public withDistinguishedName(distinguishedName: DistinguishedName): CreateCertificateAuthorityRequestBody {
        this['distinguished_name'] = distinguishedName;
        return this;
    }
    public set distinguishedName(distinguishedName: DistinguishedName  | undefined) {
        this['distinguished_name'] = distinguishedName;
    }
    public get distinguishedName(): DistinguishedName | undefined {
        return this['distinguished_name'];
    }
    public withKeyAlgorithm(keyAlgorithm: string): CreateCertificateAuthorityRequestBody {
        this['key_algorithm'] = keyAlgorithm;
        return this;
    }
    public set keyAlgorithm(keyAlgorithm: string  | undefined) {
        this['key_algorithm'] = keyAlgorithm;
    }
    public get keyAlgorithm(): string | undefined {
        return this['key_algorithm'];
    }
    public withValidity(validity: Validity): CreateCertificateAuthorityRequestBody {
        this['validity'] = validity;
        return this;
    }
    public withIssuerId(issuerId: string): CreateCertificateAuthorityRequestBody {
        this['issuer_id'] = issuerId;
        return this;
    }
    public set issuerId(issuerId: string  | undefined) {
        this['issuer_id'] = issuerId;
    }
    public get issuerId(): string | undefined {
        return this['issuer_id'];
    }
    public withPathLength(pathLength: number): CreateCertificateAuthorityRequestBody {
        this['path_length'] = pathLength;
        return this;
    }
    public set pathLength(pathLength: number  | undefined) {
        this['path_length'] = pathLength;
    }
    public get pathLength(): number | undefined {
        return this['path_length'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): CreateCertificateAuthorityRequestBody {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withKeyUsages(keyUsages: Array<string>): CreateCertificateAuthorityRequestBody {
        this['key_usages'] = keyUsages;
        return this;
    }
    public set keyUsages(keyUsages: Array<string>  | undefined) {
        this['key_usages'] = keyUsages;
    }
    public get keyUsages(): Array<string> | undefined {
        return this['key_usages'];
    }
    public withCrlConfiguration(crlConfiguration: CrlConfiguration): CreateCertificateAuthorityRequestBody {
        this['crl_configuration'] = crlConfiguration;
        return this;
    }
    public set crlConfiguration(crlConfiguration: CrlConfiguration  | undefined) {
        this['crl_configuration'] = crlConfiguration;
    }
    public get crlConfiguration(): CrlConfiguration | undefined {
        return this['crl_configuration'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateCertificateAuthorityRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCaId(caId: string): CreateCertificateAuthorityRequestBody {
        this['ca_id'] = caId;
        return this;
    }
    public set caId(caId: string  | undefined) {
        this['ca_id'] = caId;
    }
    public get caId(): string | undefined {
        return this['ca_id'];
    }
    public withHsmClusterInfo(hsmClusterInfo: HsmClusterInfo): CreateCertificateAuthorityRequestBody {
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