import { DistinguishedName } from './DistinguishedName';
import { EncCertInfo } from './EncCertInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCertificateResponse extends SdkResponse {
    private 'certificate_id'?: string;
    public status?: string;
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
    private 'enc_cert_info'?: EncCertInfo;
    private 'enterprise_project_id'?: string;
    public constructor() { 
        super();
    }
    public withCertificateId(certificateId: string): ShowCertificateResponse {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withStatus(status: string): ShowCertificateResponse {
        this['status'] = status;
        return this;
    }
    public withIssuerId(issuerId: string): ShowCertificateResponse {
        this['issuer_id'] = issuerId;
        return this;
    }
    public set issuerId(issuerId: string  | undefined) {
        this['issuer_id'] = issuerId;
    }
    public get issuerId(): string | undefined {
        return this['issuer_id'];
    }
    public withIssuerName(issuerName: string): ShowCertificateResponse {
        this['issuer_name'] = issuerName;
        return this;
    }
    public set issuerName(issuerName: string  | undefined) {
        this['issuer_name'] = issuerName;
    }
    public get issuerName(): string | undefined {
        return this['issuer_name'];
    }
    public withKeyAlgorithm(keyAlgorithm: string): ShowCertificateResponse {
        this['key_algorithm'] = keyAlgorithm;
        return this;
    }
    public set keyAlgorithm(keyAlgorithm: string  | undefined) {
        this['key_algorithm'] = keyAlgorithm;
    }
    public get keyAlgorithm(): string | undefined {
        return this['key_algorithm'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): ShowCertificateResponse {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withFreezeFlag(freezeFlag: number): ShowCertificateResponse {
        this['freeze_flag'] = freezeFlag;
        return this;
    }
    public set freezeFlag(freezeFlag: number  | undefined) {
        this['freeze_flag'] = freezeFlag;
    }
    public get freezeFlag(): number | undefined {
        return this['freeze_flag'];
    }
    public withGenMode(genMode: string): ShowCertificateResponse {
        this['gen_mode'] = genMode;
        return this;
    }
    public set genMode(genMode: string  | undefined) {
        this['gen_mode'] = genMode;
    }
    public get genMode(): string | undefined {
        return this['gen_mode'];
    }
    public withSerialNumber(serialNumber: string): ShowCertificateResponse {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withCreateTime(createTime: number): ShowCertificateResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDeleteTime(deleteTime: number): ShowCertificateResponse {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
    public withNotBefore(notBefore: number): ShowCertificateResponse {
        this['not_before'] = notBefore;
        return this;
    }
    public set notBefore(notBefore: number  | undefined) {
        this['not_before'] = notBefore;
    }
    public get notBefore(): number | undefined {
        return this['not_before'];
    }
    public withNotAfter(notAfter: number): ShowCertificateResponse {
        this['not_after'] = notAfter;
        return this;
    }
    public set notAfter(notAfter: number  | undefined) {
        this['not_after'] = notAfter;
    }
    public get notAfter(): number | undefined {
        return this['not_after'];
    }
    public withDistinguishedName(distinguishedName: DistinguishedName): ShowCertificateResponse {
        this['distinguished_name'] = distinguishedName;
        return this;
    }
    public set distinguishedName(distinguishedName: DistinguishedName  | undefined) {
        this['distinguished_name'] = distinguishedName;
    }
    public get distinguishedName(): DistinguishedName | undefined {
        return this['distinguished_name'];
    }
    public withEncCertInfo(encCertInfo: EncCertInfo): ShowCertificateResponse {
        this['enc_cert_info'] = encCertInfo;
        return this;
    }
    public set encCertInfo(encCertInfo: EncCertInfo  | undefined) {
        this['enc_cert_info'] = encCertInfo;
    }
    public get encCertInfo(): EncCertInfo | undefined {
        return this['enc_cert_info'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowCertificateResponse {
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