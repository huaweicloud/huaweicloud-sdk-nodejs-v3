import { DistinguishedName } from './DistinguishedName';
import { ListCrlConfiguration } from './ListCrlConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCertificateAuthorityResponse extends SdkResponse {
    private 'ca_id'?: string;
    public type?: string;
    public status?: string;
    private 'path_length'?: number;
    private 'issuer_id'?: string;
    private 'issuer_name'?: string;
    private 'key_algorithm'?: string;
    private 'signature_algorithm'?: string;
    private 'freeze_flag'?: number;
    private 'gen_mode'?: string;
    private 'serial_number'?: string;
    private 'create_time'?: number;
    private 'delete_time'?: number;
    private 'not_before'?: number;
    private 'not_after'?: number;
    private 'distinguished_name'?: DistinguishedName;
    private 'crl_configuration'?: ListCrlConfiguration;
    private 'enterprise_project_id'?: string;
    private 'free_quota'?: number;
    private 'charging_mode'?: number;
    private 'cluster_id'?: string;
    private 'domain_id'?: string;
    public constructor() { 
        super();
    }
    public withCaId(caId: string): ShowCertificateAuthorityResponse {
        this['ca_id'] = caId;
        return this;
    }
    public set caId(caId: string  | undefined) {
        this['ca_id'] = caId;
    }
    public get caId(): string | undefined {
        return this['ca_id'];
    }
    public withType(type: string): ShowCertificateAuthorityResponse {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): ShowCertificateAuthorityResponse {
        this['status'] = status;
        return this;
    }
    public withPathLength(pathLength: number): ShowCertificateAuthorityResponse {
        this['path_length'] = pathLength;
        return this;
    }
    public set pathLength(pathLength: number  | undefined) {
        this['path_length'] = pathLength;
    }
    public get pathLength(): number | undefined {
        return this['path_length'];
    }
    public withIssuerId(issuerId: string): ShowCertificateAuthorityResponse {
        this['issuer_id'] = issuerId;
        return this;
    }
    public set issuerId(issuerId: string  | undefined) {
        this['issuer_id'] = issuerId;
    }
    public get issuerId(): string | undefined {
        return this['issuer_id'];
    }
    public withIssuerName(issuerName: string): ShowCertificateAuthorityResponse {
        this['issuer_name'] = issuerName;
        return this;
    }
    public set issuerName(issuerName: string  | undefined) {
        this['issuer_name'] = issuerName;
    }
    public get issuerName(): string | undefined {
        return this['issuer_name'];
    }
    public withKeyAlgorithm(keyAlgorithm: string): ShowCertificateAuthorityResponse {
        this['key_algorithm'] = keyAlgorithm;
        return this;
    }
    public set keyAlgorithm(keyAlgorithm: string  | undefined) {
        this['key_algorithm'] = keyAlgorithm;
    }
    public get keyAlgorithm(): string | undefined {
        return this['key_algorithm'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): ShowCertificateAuthorityResponse {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withFreezeFlag(freezeFlag: number): ShowCertificateAuthorityResponse {
        this['freeze_flag'] = freezeFlag;
        return this;
    }
    public set freezeFlag(freezeFlag: number  | undefined) {
        this['freeze_flag'] = freezeFlag;
    }
    public get freezeFlag(): number | undefined {
        return this['freeze_flag'];
    }
    public withGenMode(genMode: string): ShowCertificateAuthorityResponse {
        this['gen_mode'] = genMode;
        return this;
    }
    public set genMode(genMode: string  | undefined) {
        this['gen_mode'] = genMode;
    }
    public get genMode(): string | undefined {
        return this['gen_mode'];
    }
    public withSerialNumber(serialNumber: string): ShowCertificateAuthorityResponse {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withCreateTime(createTime: number): ShowCertificateAuthorityResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDeleteTime(deleteTime: number): ShowCertificateAuthorityResponse {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
    public withNotBefore(notBefore: number): ShowCertificateAuthorityResponse {
        this['not_before'] = notBefore;
        return this;
    }
    public set notBefore(notBefore: number  | undefined) {
        this['not_before'] = notBefore;
    }
    public get notBefore(): number | undefined {
        return this['not_before'];
    }
    public withNotAfter(notAfter: number): ShowCertificateAuthorityResponse {
        this['not_after'] = notAfter;
        return this;
    }
    public set notAfter(notAfter: number  | undefined) {
        this['not_after'] = notAfter;
    }
    public get notAfter(): number | undefined {
        return this['not_after'];
    }
    public withDistinguishedName(distinguishedName: DistinguishedName): ShowCertificateAuthorityResponse {
        this['distinguished_name'] = distinguishedName;
        return this;
    }
    public set distinguishedName(distinguishedName: DistinguishedName  | undefined) {
        this['distinguished_name'] = distinguishedName;
    }
    public get distinguishedName(): DistinguishedName | undefined {
        return this['distinguished_name'];
    }
    public withCrlConfiguration(crlConfiguration: ListCrlConfiguration): ShowCertificateAuthorityResponse {
        this['crl_configuration'] = crlConfiguration;
        return this;
    }
    public set crlConfiguration(crlConfiguration: ListCrlConfiguration  | undefined) {
        this['crl_configuration'] = crlConfiguration;
    }
    public get crlConfiguration(): ListCrlConfiguration | undefined {
        return this['crl_configuration'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowCertificateAuthorityResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFreeQuota(freeQuota: number): ShowCertificateAuthorityResponse {
        this['free_quota'] = freeQuota;
        return this;
    }
    public set freeQuota(freeQuota: number  | undefined) {
        this['free_quota'] = freeQuota;
    }
    public get freeQuota(): number | undefined {
        return this['free_quota'];
    }
    public withChargingMode(chargingMode: number): ShowCertificateAuthorityResponse {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withClusterId(clusterId: string): ShowCertificateAuthorityResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDomainId(domainId: string): ShowCertificateAuthorityResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
}