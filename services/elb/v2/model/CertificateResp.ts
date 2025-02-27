

export class CertificateResp {
    public id?: string;
    private 'tenant_id'?: string;
    private 'admin_state_up'?: boolean;
    public name?: string;
    public description?: string;
    public type?: CertificateRespTypeEnum | string;
    public domain?: string;
    private 'private_key'?: string;
    public certificate?: string;
    private 'expire_time'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public source?: string;
    private 'protection_status'?: CertificateRespProtectionStatusEnum | string;
    private 'protection_reason'?: string;
    public constructor(id?: string, tenantId?: string, adminStateUp?: boolean, name?: string, description?: string, type?: string, domain?: string, privateKey?: string, certificate?: string, expireTime?: string, createTime?: string, updateTime?: string) { 
        this['id'] = id;
        this['tenant_id'] = tenantId;
        this['admin_state_up'] = adminStateUp;
        this['name'] = name;
        this['description'] = description;
        this['type'] = type;
        this['domain'] = domain;
        this['private_key'] = privateKey;
        this['certificate'] = certificate;
        this['expire_time'] = expireTime;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
    }
    public withId(id: string): CertificateResp {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): CertificateResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): CertificateResp {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withName(name: string): CertificateResp {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CertificateResp {
        this['description'] = description;
        return this;
    }
    public withType(type: CertificateRespTypeEnum | string): CertificateResp {
        this['type'] = type;
        return this;
    }
    public withDomain(domain: string): CertificateResp {
        this['domain'] = domain;
        return this;
    }
    public withPrivateKey(privateKey: string): CertificateResp {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withCertificate(certificate: string): CertificateResp {
        this['certificate'] = certificate;
        return this;
    }
    public withExpireTime(expireTime: string): CertificateResp {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withCreateTime(createTime: string): CertificateResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CertificateResp {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withSource(source: string): CertificateResp {
        this['source'] = source;
        return this;
    }
    public withProtectionStatus(protectionStatus: CertificateRespProtectionStatusEnum | string): CertificateResp {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: CertificateRespProtectionStatusEnum | string  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): CertificateRespProtectionStatusEnum | string | undefined {
        return this['protection_status'];
    }
    public withProtectionReason(protectionReason: string): CertificateResp {
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
export enum CertificateRespTypeEnum {
    SERVER = 'server',
    CLIENT = 'client'
}
/**
    * @export
    * @enum {string}
    */
export enum CertificateRespProtectionStatusEnum {
    NONPROTECTION = 'nonProtection',
    CONSOLEPROTECTION = 'consoleProtection'
}
