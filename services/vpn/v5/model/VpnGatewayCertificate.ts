

export class VpnGatewayCertificate {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'vgw_id'?: string;
    public status?: VpnGatewayCertificateStatusEnum | string;
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
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): VpnGatewayCertificate {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VpnGatewayCertificate {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): VpnGatewayCertificate {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVgwId(vgwId: string): VpnGatewayCertificate {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
    public withStatus(status: VpnGatewayCertificateStatusEnum | string): VpnGatewayCertificate {
        this['status'] = status;
        return this;
    }
    public withIssuer(issuer: string): VpnGatewayCertificate {
        this['issuer'] = issuer;
        return this;
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): VpnGatewayCertificate {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withCertificateSerialNumber(certificateSerialNumber: string): VpnGatewayCertificate {
        this['certificate_serial_number'] = certificateSerialNumber;
        return this;
    }
    public set certificateSerialNumber(certificateSerialNumber: string  | undefined) {
        this['certificate_serial_number'] = certificateSerialNumber;
    }
    public get certificateSerialNumber(): string | undefined {
        return this['certificate_serial_number'];
    }
    public withCertificateSubject(certificateSubject: string): VpnGatewayCertificate {
        this['certificate_subject'] = certificateSubject;
        return this;
    }
    public set certificateSubject(certificateSubject: string  | undefined) {
        this['certificate_subject'] = certificateSubject;
    }
    public get certificateSubject(): string | undefined {
        return this['certificate_subject'];
    }
    public withCertificateExpireTime(certificateExpireTime: Date): VpnGatewayCertificate {
        this['certificate_expire_time'] = certificateExpireTime;
        return this;
    }
    public set certificateExpireTime(certificateExpireTime: Date  | undefined) {
        this['certificate_expire_time'] = certificateExpireTime;
    }
    public get certificateExpireTime(): Date | undefined {
        return this['certificate_expire_time'];
    }
    public withCertificateChainSerialNumber(certificateChainSerialNumber: string): VpnGatewayCertificate {
        this['certificate_chain_serial_number'] = certificateChainSerialNumber;
        return this;
    }
    public set certificateChainSerialNumber(certificateChainSerialNumber: string  | undefined) {
        this['certificate_chain_serial_number'] = certificateChainSerialNumber;
    }
    public get certificateChainSerialNumber(): string | undefined {
        return this['certificate_chain_serial_number'];
    }
    public withCertificateChainSubject(certificateChainSubject: string): VpnGatewayCertificate {
        this['certificate_chain_subject'] = certificateChainSubject;
        return this;
    }
    public set certificateChainSubject(certificateChainSubject: string  | undefined) {
        this['certificate_chain_subject'] = certificateChainSubject;
    }
    public get certificateChainSubject(): string | undefined {
        return this['certificate_chain_subject'];
    }
    public withCertificateChainExpireTime(certificateChainExpireTime: Date): VpnGatewayCertificate {
        this['certificate_chain_expire_time'] = certificateChainExpireTime;
        return this;
    }
    public set certificateChainExpireTime(certificateChainExpireTime: Date  | undefined) {
        this['certificate_chain_expire_time'] = certificateChainExpireTime;
    }
    public get certificateChainExpireTime(): Date | undefined {
        return this['certificate_chain_expire_time'];
    }
    public withEncCertificateSerialNumber(encCertificateSerialNumber: string): VpnGatewayCertificate {
        this['enc_certificate_serial_number'] = encCertificateSerialNumber;
        return this;
    }
    public set encCertificateSerialNumber(encCertificateSerialNumber: string  | undefined) {
        this['enc_certificate_serial_number'] = encCertificateSerialNumber;
    }
    public get encCertificateSerialNumber(): string | undefined {
        return this['enc_certificate_serial_number'];
    }
    public withEncCertificateSubject(encCertificateSubject: string): VpnGatewayCertificate {
        this['enc_certificate_subject'] = encCertificateSubject;
        return this;
    }
    public set encCertificateSubject(encCertificateSubject: string  | undefined) {
        this['enc_certificate_subject'] = encCertificateSubject;
    }
    public get encCertificateSubject(): string | undefined {
        return this['enc_certificate_subject'];
    }
    public withEncCertificateExpireTime(encCertificateExpireTime: Date): VpnGatewayCertificate {
        this['enc_certificate_expire_time'] = encCertificateExpireTime;
        return this;
    }
    public set encCertificateExpireTime(encCertificateExpireTime: Date  | undefined) {
        this['enc_certificate_expire_time'] = encCertificateExpireTime;
    }
    public get encCertificateExpireTime(): Date | undefined {
        return this['enc_certificate_expire_time'];
    }
    public withCreatedAt(createdAt: Date): VpnGatewayCertificate {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): VpnGatewayCertificate {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VpnGatewayCertificateStatusEnum {
    BOUND = 'BOUND',
    FAULT = 'FAULT',
    BINDING = 'BINDING'
}
