

export class VpnGatewayCertificateConfig {
    public id?: string;
    public name?: string;
    private 'vgw_id'?: string;
    public issuer?: string;
    private 'signature_algorithm'?: string;
    private 'certificate_serial_number'?: string;
    private 'certificate_subject'?: string;
    private 'certificate_expire_time'?: Date;
    private 'certificate_chain_serial_number'?: string;
    private 'certificate_chain_subject'?: string;
    private 'certificate_chain_expire_time'?: Date;
    private 'enc_certificate_serial_number'?: string;
    private 'enc_certificate_subject'?: string;
    private 'enc_certificate_expire_time'?: Date;
    private 'created_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): VpnGatewayCertificateConfig {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VpnGatewayCertificateConfig {
        this['name'] = name;
        return this;
    }
    public withVgwId(vgwId: string): VpnGatewayCertificateConfig {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
    public withIssuer(issuer: string): VpnGatewayCertificateConfig {
        this['issuer'] = issuer;
        return this;
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): VpnGatewayCertificateConfig {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withCertificateSerialNumber(certificateSerialNumber: string): VpnGatewayCertificateConfig {
        this['certificate_serial_number'] = certificateSerialNumber;
        return this;
    }
    public set certificateSerialNumber(certificateSerialNumber: string  | undefined) {
        this['certificate_serial_number'] = certificateSerialNumber;
    }
    public get certificateSerialNumber(): string | undefined {
        return this['certificate_serial_number'];
    }
    public withCertificateSubject(certificateSubject: string): VpnGatewayCertificateConfig {
        this['certificate_subject'] = certificateSubject;
        return this;
    }
    public set certificateSubject(certificateSubject: string  | undefined) {
        this['certificate_subject'] = certificateSubject;
    }
    public get certificateSubject(): string | undefined {
        return this['certificate_subject'];
    }
    public withCertificateExpireTime(certificateExpireTime: Date): VpnGatewayCertificateConfig {
        this['certificate_expire_time'] = certificateExpireTime;
        return this;
    }
    public set certificateExpireTime(certificateExpireTime: Date  | undefined) {
        this['certificate_expire_time'] = certificateExpireTime;
    }
    public get certificateExpireTime(): Date | undefined {
        return this['certificate_expire_time'];
    }
    public withCertificateChainSerialNumber(certificateChainSerialNumber: string): VpnGatewayCertificateConfig {
        this['certificate_chain_serial_number'] = certificateChainSerialNumber;
        return this;
    }
    public set certificateChainSerialNumber(certificateChainSerialNumber: string  | undefined) {
        this['certificate_chain_serial_number'] = certificateChainSerialNumber;
    }
    public get certificateChainSerialNumber(): string | undefined {
        return this['certificate_chain_serial_number'];
    }
    public withCertificateChainSubject(certificateChainSubject: string): VpnGatewayCertificateConfig {
        this['certificate_chain_subject'] = certificateChainSubject;
        return this;
    }
    public set certificateChainSubject(certificateChainSubject: string  | undefined) {
        this['certificate_chain_subject'] = certificateChainSubject;
    }
    public get certificateChainSubject(): string | undefined {
        return this['certificate_chain_subject'];
    }
    public withCertificateChainExpireTime(certificateChainExpireTime: Date): VpnGatewayCertificateConfig {
        this['certificate_chain_expire_time'] = certificateChainExpireTime;
        return this;
    }
    public set certificateChainExpireTime(certificateChainExpireTime: Date  | undefined) {
        this['certificate_chain_expire_time'] = certificateChainExpireTime;
    }
    public get certificateChainExpireTime(): Date | undefined {
        return this['certificate_chain_expire_time'];
    }
    public withEncCertificateSerialNumber(encCertificateSerialNumber: string): VpnGatewayCertificateConfig {
        this['enc_certificate_serial_number'] = encCertificateSerialNumber;
        return this;
    }
    public set encCertificateSerialNumber(encCertificateSerialNumber: string  | undefined) {
        this['enc_certificate_serial_number'] = encCertificateSerialNumber;
    }
    public get encCertificateSerialNumber(): string | undefined {
        return this['enc_certificate_serial_number'];
    }
    public withEncCertificateSubject(encCertificateSubject: string): VpnGatewayCertificateConfig {
        this['enc_certificate_subject'] = encCertificateSubject;
        return this;
    }
    public set encCertificateSubject(encCertificateSubject: string  | undefined) {
        this['enc_certificate_subject'] = encCertificateSubject;
    }
    public get encCertificateSubject(): string | undefined {
        return this['enc_certificate_subject'];
    }
    public withEncCertificateExpireTime(encCertificateExpireTime: Date): VpnGatewayCertificateConfig {
        this['enc_certificate_expire_time'] = encCertificateExpireTime;
        return this;
    }
    public set encCertificateExpireTime(encCertificateExpireTime: Date  | undefined) {
        this['enc_certificate_expire_time'] = encCertificateExpireTime;
    }
    public get encCertificateExpireTime(): Date | undefined {
        return this['enc_certificate_expire_time'];
    }
    public withCreatedAt(createdAt: Date): VpnGatewayCertificateConfig {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
}