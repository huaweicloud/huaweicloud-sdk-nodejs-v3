import { CrlConfigurationData } from './CrlConfigurationData';
import { DistinguishedName } from './DistinguishedName';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCertDetailResponse extends SdkResponse {
    private 'cert_id'?: string;
    private 'serial_number'?: string;
    public type?: string;
    public apply?: string;
    private 'distinguished_name'?: DistinguishedName;
    private 'key_algorithm'?: string;
    private 'signature_algorithm'?: string;
    private 'not_before'?: string;
    private 'not_after'?: string;
    public status?: string;
    private 'pem_code'?: string;
    private 'issuer_name'?: string;
    private 'crl_configuration'?: CrlConfigurationData;
    public constructor() { 
        super();
    }
    public withCertId(certId: string): ShowCertDetailResponse {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
    public withSerialNumber(serialNumber: string): ShowCertDetailResponse {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withType(type: string): ShowCertDetailResponse {
        this['type'] = type;
        return this;
    }
    public withApply(apply: string): ShowCertDetailResponse {
        this['apply'] = apply;
        return this;
    }
    public withDistinguishedName(distinguishedName: DistinguishedName): ShowCertDetailResponse {
        this['distinguished_name'] = distinguishedName;
        return this;
    }
    public set distinguishedName(distinguishedName: DistinguishedName  | undefined) {
        this['distinguished_name'] = distinguishedName;
    }
    public get distinguishedName(): DistinguishedName | undefined {
        return this['distinguished_name'];
    }
    public withKeyAlgorithm(keyAlgorithm: string): ShowCertDetailResponse {
        this['key_algorithm'] = keyAlgorithm;
        return this;
    }
    public set keyAlgorithm(keyAlgorithm: string  | undefined) {
        this['key_algorithm'] = keyAlgorithm;
    }
    public get keyAlgorithm(): string | undefined {
        return this['key_algorithm'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): ShowCertDetailResponse {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withNotBefore(notBefore: string): ShowCertDetailResponse {
        this['not_before'] = notBefore;
        return this;
    }
    public set notBefore(notBefore: string  | undefined) {
        this['not_before'] = notBefore;
    }
    public get notBefore(): string | undefined {
        return this['not_before'];
    }
    public withNotAfter(notAfter: string): ShowCertDetailResponse {
        this['not_after'] = notAfter;
        return this;
    }
    public set notAfter(notAfter: string  | undefined) {
        this['not_after'] = notAfter;
    }
    public get notAfter(): string | undefined {
        return this['not_after'];
    }
    public withStatus(status: string): ShowCertDetailResponse {
        this['status'] = status;
        return this;
    }
    public withPemCode(pemCode: string): ShowCertDetailResponse {
        this['pem_code'] = pemCode;
        return this;
    }
    public set pemCode(pemCode: string  | undefined) {
        this['pem_code'] = pemCode;
    }
    public get pemCode(): string | undefined {
        return this['pem_code'];
    }
    public withIssuerName(issuerName: string): ShowCertDetailResponse {
        this['issuer_name'] = issuerName;
        return this;
    }
    public set issuerName(issuerName: string  | undefined) {
        this['issuer_name'] = issuerName;
    }
    public get issuerName(): string | undefined {
        return this['issuer_name'];
    }
    public withCrlConfiguration(crlConfiguration: CrlConfigurationData): ShowCertDetailResponse {
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