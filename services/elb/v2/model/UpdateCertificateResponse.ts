
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCertificateResponse extends SdkResponse {
    public id?: string;
    private 'tenant_id'?: string | undefined;
    private 'admin_state_up'?: boolean | undefined;
    public name?: string;
    public description?: string;
    public type?: UpdateCertificateResponseTypeEnum;
    public domain?: string;
    private 'private_key'?: string | undefined;
    public certificate?: string;
    private 'expire_time'?: string | undefined;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
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
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateCertificateResponse {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
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
    public withType(type: UpdateCertificateResponseTypeEnum): UpdateCertificateResponse {
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
    public set privateKey(privateKey: string | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey() {
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
    public set expireTime(expireTime: string | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime() {
        return this['expire_time'];
    }
    public withCreateTime(createTime: string): UpdateCertificateResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateCertificateResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
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
