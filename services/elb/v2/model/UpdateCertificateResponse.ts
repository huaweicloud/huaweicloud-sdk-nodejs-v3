
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCertificateResponse extends SdkResponse {
    public id?: string;
    private 'tenant_id'?: string;
    private 'admin_state_up'?: boolean;
    public name?: string;
    public description?: string;
    public type?: UpdateCertificateResponseTypeEnum | string;
    public domain?: string;
    private 'private_key'?: string;
    public certificate?: string;
    private 'expire_time'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateCertificateResponse {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): UpdateCertificateResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateCertificateResponse {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withName(name: string): UpdateCertificateResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateCertificateResponse {
        this['description'] = description;
        return this;
    }
    public withType(type: UpdateCertificateResponseTypeEnum | string): UpdateCertificateResponse {
        this['type'] = type;
        return this;
    }
    public withDomain(domain: string): UpdateCertificateResponse {
        this['domain'] = domain;
        return this;
    }
    public withPrivateKey(privateKey: string): UpdateCertificateResponse {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withCertificate(certificate: string): UpdateCertificateResponse {
        this['certificate'] = certificate;
        return this;
    }
    public withExpireTime(expireTime: string): UpdateCertificateResponse {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withCreateTime(createTime: string): UpdateCertificateResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateCertificateResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateCertificateResponseTypeEnum {
    SERVER = 'server',
    CLIENT = 'client'
}
