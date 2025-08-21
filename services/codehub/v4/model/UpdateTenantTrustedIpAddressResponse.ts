
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTenantTrustedIpAddressResponse extends SdkResponse {
    public id?: string;
    private 'user_id'?: number;
    private 'domain_id'?: string;
    private 'ip_range'?: string;
    private 'ip_type'?: UpdateTenantTrustedIpAddressResponseIpTypeEnum | number;
    private 'ip_start'?: string;
    private 'ip_end'?: string;
    private 'view_flag'?: UpdateTenantTrustedIpAddressResponseViewFlagEnum | number;
    private 'download_flag'?: UpdateTenantTrustedIpAddressResponseDownloadFlagEnum | number;
    private 'upload_flag'?: UpdateTenantTrustedIpAddressResponseUploadFlagEnum | number;
    public remark?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'order_flag'?: UpdateTenantTrustedIpAddressResponseOrderFlagEnum | number;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateTenantTrustedIpAddressResponse {
        this['id'] = id;
        return this;
    }
    public withUserId(userId: number): UpdateTenantTrustedIpAddressResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: number  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): number | undefined {
        return this['user_id'];
    }
    public withDomainId(domainId: string): UpdateTenantTrustedIpAddressResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withIpRange(ipRange: string): UpdateTenantTrustedIpAddressResponse {
        this['ip_range'] = ipRange;
        return this;
    }
    public set ipRange(ipRange: string  | undefined) {
        this['ip_range'] = ipRange;
    }
    public get ipRange(): string | undefined {
        return this['ip_range'];
    }
    public withIpType(ipType: UpdateTenantTrustedIpAddressResponseIpTypeEnum | number): UpdateTenantTrustedIpAddressResponse {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: UpdateTenantTrustedIpAddressResponseIpTypeEnum | number  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): UpdateTenantTrustedIpAddressResponseIpTypeEnum | number | undefined {
        return this['ip_type'];
    }
    public withIpStart(ipStart: string): UpdateTenantTrustedIpAddressResponse {
        this['ip_start'] = ipStart;
        return this;
    }
    public set ipStart(ipStart: string  | undefined) {
        this['ip_start'] = ipStart;
    }
    public get ipStart(): string | undefined {
        return this['ip_start'];
    }
    public withIpEnd(ipEnd: string): UpdateTenantTrustedIpAddressResponse {
        this['ip_end'] = ipEnd;
        return this;
    }
    public set ipEnd(ipEnd: string  | undefined) {
        this['ip_end'] = ipEnd;
    }
    public get ipEnd(): string | undefined {
        return this['ip_end'];
    }
    public withViewFlag(viewFlag: UpdateTenantTrustedIpAddressResponseViewFlagEnum | number): UpdateTenantTrustedIpAddressResponse {
        this['view_flag'] = viewFlag;
        return this;
    }
    public set viewFlag(viewFlag: UpdateTenantTrustedIpAddressResponseViewFlagEnum | number  | undefined) {
        this['view_flag'] = viewFlag;
    }
    public get viewFlag(): UpdateTenantTrustedIpAddressResponseViewFlagEnum | number | undefined {
        return this['view_flag'];
    }
    public withDownloadFlag(downloadFlag: UpdateTenantTrustedIpAddressResponseDownloadFlagEnum | number): UpdateTenantTrustedIpAddressResponse {
        this['download_flag'] = downloadFlag;
        return this;
    }
    public set downloadFlag(downloadFlag: UpdateTenantTrustedIpAddressResponseDownloadFlagEnum | number  | undefined) {
        this['download_flag'] = downloadFlag;
    }
    public get downloadFlag(): UpdateTenantTrustedIpAddressResponseDownloadFlagEnum | number | undefined {
        return this['download_flag'];
    }
    public withUploadFlag(uploadFlag: UpdateTenantTrustedIpAddressResponseUploadFlagEnum | number): UpdateTenantTrustedIpAddressResponse {
        this['upload_flag'] = uploadFlag;
        return this;
    }
    public set uploadFlag(uploadFlag: UpdateTenantTrustedIpAddressResponseUploadFlagEnum | number  | undefined) {
        this['upload_flag'] = uploadFlag;
    }
    public get uploadFlag(): UpdateTenantTrustedIpAddressResponseUploadFlagEnum | number | undefined {
        return this['upload_flag'];
    }
    public withRemark(remark: string): UpdateTenantTrustedIpAddressResponse {
        this['remark'] = remark;
        return this;
    }
    public withCreatedAt(createdAt: string): UpdateTenantTrustedIpAddressResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): UpdateTenantTrustedIpAddressResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withOrderFlag(orderFlag: UpdateTenantTrustedIpAddressResponseOrderFlagEnum | number): UpdateTenantTrustedIpAddressResponse {
        this['order_flag'] = orderFlag;
        return this;
    }
    public set orderFlag(orderFlag: UpdateTenantTrustedIpAddressResponseOrderFlagEnum | number  | undefined) {
        this['order_flag'] = orderFlag;
    }
    public get orderFlag(): UpdateTenantTrustedIpAddressResponseOrderFlagEnum | number | undefined {
        return this['order_flag'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateTenantTrustedIpAddressResponseIpTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateTenantTrustedIpAddressResponseViewFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateTenantTrustedIpAddressResponseDownloadFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateTenantTrustedIpAddressResponseUploadFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateTenantTrustedIpAddressResponseOrderFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
