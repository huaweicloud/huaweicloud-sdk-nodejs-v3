
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddTenantTrustedIpAddressResponse extends SdkResponse {
    public id?: string;
    private 'user_id'?: number;
    private 'domain_id'?: string;
    private 'ip_range'?: string;
    private 'ip_type'?: AddTenantTrustedIpAddressResponseIpTypeEnum | number;
    private 'ip_start'?: string;
    private 'ip_end'?: string;
    private 'view_flag'?: AddTenantTrustedIpAddressResponseViewFlagEnum | number;
    private 'download_flag'?: AddTenantTrustedIpAddressResponseDownloadFlagEnum | number;
    private 'upload_flag'?: AddTenantTrustedIpAddressResponseUploadFlagEnum | number;
    public remark?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'order_flag'?: AddTenantTrustedIpAddressResponseOrderFlagEnum | number;
    public constructor() { 
        super();
    }
    public withId(id: string): AddTenantTrustedIpAddressResponse {
        this['id'] = id;
        return this;
    }
    public withUserId(userId: number): AddTenantTrustedIpAddressResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: number  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): number | undefined {
        return this['user_id'];
    }
    public withDomainId(domainId: string): AddTenantTrustedIpAddressResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withIpRange(ipRange: string): AddTenantTrustedIpAddressResponse {
        this['ip_range'] = ipRange;
        return this;
    }
    public set ipRange(ipRange: string  | undefined) {
        this['ip_range'] = ipRange;
    }
    public get ipRange(): string | undefined {
        return this['ip_range'];
    }
    public withIpType(ipType: AddTenantTrustedIpAddressResponseIpTypeEnum | number): AddTenantTrustedIpAddressResponse {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: AddTenantTrustedIpAddressResponseIpTypeEnum | number  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): AddTenantTrustedIpAddressResponseIpTypeEnum | number | undefined {
        return this['ip_type'];
    }
    public withIpStart(ipStart: string): AddTenantTrustedIpAddressResponse {
        this['ip_start'] = ipStart;
        return this;
    }
    public set ipStart(ipStart: string  | undefined) {
        this['ip_start'] = ipStart;
    }
    public get ipStart(): string | undefined {
        return this['ip_start'];
    }
    public withIpEnd(ipEnd: string): AddTenantTrustedIpAddressResponse {
        this['ip_end'] = ipEnd;
        return this;
    }
    public set ipEnd(ipEnd: string  | undefined) {
        this['ip_end'] = ipEnd;
    }
    public get ipEnd(): string | undefined {
        return this['ip_end'];
    }
    public withViewFlag(viewFlag: AddTenantTrustedIpAddressResponseViewFlagEnum | number): AddTenantTrustedIpAddressResponse {
        this['view_flag'] = viewFlag;
        return this;
    }
    public set viewFlag(viewFlag: AddTenantTrustedIpAddressResponseViewFlagEnum | number  | undefined) {
        this['view_flag'] = viewFlag;
    }
    public get viewFlag(): AddTenantTrustedIpAddressResponseViewFlagEnum | number | undefined {
        return this['view_flag'];
    }
    public withDownloadFlag(downloadFlag: AddTenantTrustedIpAddressResponseDownloadFlagEnum | number): AddTenantTrustedIpAddressResponse {
        this['download_flag'] = downloadFlag;
        return this;
    }
    public set downloadFlag(downloadFlag: AddTenantTrustedIpAddressResponseDownloadFlagEnum | number  | undefined) {
        this['download_flag'] = downloadFlag;
    }
    public get downloadFlag(): AddTenantTrustedIpAddressResponseDownloadFlagEnum | number | undefined {
        return this['download_flag'];
    }
    public withUploadFlag(uploadFlag: AddTenantTrustedIpAddressResponseUploadFlagEnum | number): AddTenantTrustedIpAddressResponse {
        this['upload_flag'] = uploadFlag;
        return this;
    }
    public set uploadFlag(uploadFlag: AddTenantTrustedIpAddressResponseUploadFlagEnum | number  | undefined) {
        this['upload_flag'] = uploadFlag;
    }
    public get uploadFlag(): AddTenantTrustedIpAddressResponseUploadFlagEnum | number | undefined {
        return this['upload_flag'];
    }
    public withRemark(remark: string): AddTenantTrustedIpAddressResponse {
        this['remark'] = remark;
        return this;
    }
    public withCreatedAt(createdAt: string): AddTenantTrustedIpAddressResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): AddTenantTrustedIpAddressResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withOrderFlag(orderFlag: AddTenantTrustedIpAddressResponseOrderFlagEnum | number): AddTenantTrustedIpAddressResponse {
        this['order_flag'] = orderFlag;
        return this;
    }
    public set orderFlag(orderFlag: AddTenantTrustedIpAddressResponseOrderFlagEnum | number  | undefined) {
        this['order_flag'] = orderFlag;
    }
    public get orderFlag(): AddTenantTrustedIpAddressResponseOrderFlagEnum | number | undefined {
        return this['order_flag'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddTenantTrustedIpAddressResponseIpTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum AddTenantTrustedIpAddressResponseViewFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum AddTenantTrustedIpAddressResponseDownloadFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum AddTenantTrustedIpAddressResponseUploadFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum AddTenantTrustedIpAddressResponseOrderFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
