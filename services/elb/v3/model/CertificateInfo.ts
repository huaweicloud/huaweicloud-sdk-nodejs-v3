

export class CertificateInfo {
    private 'admin_state_up'?: boolean;
    public certificate?: string;
    public description?: string;
    public domain?: string;
    public id?: string;
    public name?: string;
    private 'private_key'?: string;
    public type?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'expire_time'?: string;
    private 'project_id'?: string;
    private 'enc_certificate'?: string;
    private 'enc_private_key'?: string;
    private 'scm_certificate_id'?: string;
    private 'common_name'?: string;
    public fingerprint?: string;
    private 'subject_alternative_names'?: Array<string>;
    public source?: string;
    private 'protection_status'?: CertificateInfoProtectionStatusEnum | string;
    private 'protection_reason'?: string;
    public constructor(adminStateUp?: boolean, certificate?: string, description?: string, domain?: string, id?: string, name?: string, privateKey?: string, type?: string, createdAt?: string, updatedAt?: string, expireTime?: string, projectId?: string) { 
        this['admin_state_up'] = adminStateUp;
        this['certificate'] = certificate;
        this['description'] = description;
        this['domain'] = domain;
        this['id'] = id;
        this['name'] = name;
        this['private_key'] = privateKey;
        this['type'] = type;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['expire_time'] = expireTime;
        this['project_id'] = projectId;
    }
    public withAdminStateUp(adminStateUp: boolean): CertificateInfo {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withCertificate(certificate: string): CertificateInfo {
        this['certificate'] = certificate;
        return this;
    }
    public withDescription(description: string): CertificateInfo {
        this['description'] = description;
        return this;
    }
    public withDomain(domain: string): CertificateInfo {
        this['domain'] = domain;
        return this;
    }
    public withId(id: string): CertificateInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CertificateInfo {
        this['name'] = name;
        return this;
    }
    public withPrivateKey(privateKey: string): CertificateInfo {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withType(type: string): CertificateInfo {
        this['type'] = type;
        return this;
    }
    public withCreatedAt(createdAt: string): CertificateInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): CertificateInfo {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withExpireTime(expireTime: string): CertificateInfo {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withProjectId(projectId: string): CertificateInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEncCertificate(encCertificate: string): CertificateInfo {
        this['enc_certificate'] = encCertificate;
        return this;
    }
    public set encCertificate(encCertificate: string  | undefined) {
        this['enc_certificate'] = encCertificate;
    }
    public get encCertificate(): string | undefined {
        return this['enc_certificate'];
    }
    public withEncPrivateKey(encPrivateKey: string): CertificateInfo {
        this['enc_private_key'] = encPrivateKey;
        return this;
    }
    public set encPrivateKey(encPrivateKey: string  | undefined) {
        this['enc_private_key'] = encPrivateKey;
    }
    public get encPrivateKey(): string | undefined {
        return this['enc_private_key'];
    }
    public withScmCertificateId(scmCertificateId: string): CertificateInfo {
        this['scm_certificate_id'] = scmCertificateId;
        return this;
    }
    public set scmCertificateId(scmCertificateId: string  | undefined) {
        this['scm_certificate_id'] = scmCertificateId;
    }
    public get scmCertificateId(): string | undefined {
        return this['scm_certificate_id'];
    }
    public withCommonName(commonName: string): CertificateInfo {
        this['common_name'] = commonName;
        return this;
    }
    public set commonName(commonName: string  | undefined) {
        this['common_name'] = commonName;
    }
    public get commonName(): string | undefined {
        return this['common_name'];
    }
    public withFingerprint(fingerprint: string): CertificateInfo {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withSubjectAlternativeNames(subjectAlternativeNames: Array<string>): CertificateInfo {
        this['subject_alternative_names'] = subjectAlternativeNames;
        return this;
    }
    public set subjectAlternativeNames(subjectAlternativeNames: Array<string>  | undefined) {
        this['subject_alternative_names'] = subjectAlternativeNames;
    }
    public get subjectAlternativeNames(): Array<string> | undefined {
        return this['subject_alternative_names'];
    }
    public withSource(source: string): CertificateInfo {
        this['source'] = source;
        return this;
    }
    public withProtectionStatus(protectionStatus: CertificateInfoProtectionStatusEnum | string): CertificateInfo {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: CertificateInfoProtectionStatusEnum | string  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): CertificateInfoProtectionStatusEnum | string | undefined {
        return this['protection_status'];
    }
    public withProtectionReason(protectionReason: string): CertificateInfo {
        this['protection_reason'] = protectionReason;
        return this;
    }
    public set protectionReason(protectionReason: string  | undefined) {
        this['protection_reason'] = protectionReason;
    }
    public get protectionReason(): string | undefined {
        return this['protection_reason'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CertificateInfoProtectionStatusEnum {
    NONPROTECTION = 'nonProtection',
    CONSOLEPROTECTION = 'consoleProtection'
}
