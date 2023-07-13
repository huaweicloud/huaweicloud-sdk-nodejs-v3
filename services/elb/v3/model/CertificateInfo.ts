

export class CertificateInfo {
    private 'admin_state_up': boolean | undefined;
    public certificate: string;
    public description: string;
    public domain: string;
    public id: string;
    public name: string;
    private 'private_key': string | undefined;
    public type: string;
    private 'created_at': string | undefined;
    private 'updated_at': string | undefined;
    private 'expire_time': string | undefined;
    private 'project_id': string | undefined;
    private 'enc_certificate'?: string | undefined;
    private 'enc_private_key'?: string | undefined;
    public constructor(adminStateUp?: any, certificate?: any, description?: any, domain?: any, id?: any, name?: any, privateKey?: any, type?: any, createdAt?: any, updatedAt?: any, expireTime?: any, projectId?: any) { 
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
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
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
    public set privateKey(privateKey: string | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey() {
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
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): CertificateInfo {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withExpireTime(expireTime: string): CertificateInfo {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime() {
        return this['expire_time'];
    }
    public withProjectId(projectId: string): CertificateInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withEncCertificate(encCertificate: string): CertificateInfo {
        this['enc_certificate'] = encCertificate;
        return this;
    }
    public set encCertificate(encCertificate: string | undefined) {
        this['enc_certificate'] = encCertificate;
    }
    public get encCertificate() {
        return this['enc_certificate'];
    }
    public withEncPrivateKey(encPrivateKey: string): CertificateInfo {
        this['enc_private_key'] = encPrivateKey;
        return this;
    }
    public set encPrivateKey(encPrivateKey: string | undefined) {
        this['enc_private_key'] = encPrivateKey;
    }
    public get encPrivateKey() {
        return this['enc_private_key'];
    }
}