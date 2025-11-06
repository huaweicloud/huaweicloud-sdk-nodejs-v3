
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddTrustedIpAddressResponse extends SdkResponse {
    public id?: string;
    private 'repository_id'?: number;
    private 'ip_range'?: string;
    private 'ip_type'?: AddTrustedIpAddressResponseIpTypeEnum | number;
    private 'ip_start'?: string;
    private 'ip_end'?: string;
    private 'view_flag'?: AddTrustedIpAddressResponseViewFlagEnum | number;
    private 'download_flag'?: AddTrustedIpAddressResponseDownloadFlagEnum | number;
    private 'upload_flag'?: AddTrustedIpAddressResponseUploadFlagEnum | number;
    public remark?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'order_flag'?: AddTrustedIpAddressResponseOrderFlagEnum | number;
    public constructor() { 
        super();
    }
    public withId(id: string): AddTrustedIpAddressResponse {
        this['id'] = id;
        return this;
    }
    public withRepositoryId(repositoryId: number): AddTrustedIpAddressResponse {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withIpRange(ipRange: string): AddTrustedIpAddressResponse {
        this['ip_range'] = ipRange;
        return this;
    }
    public set ipRange(ipRange: string  | undefined) {
        this['ip_range'] = ipRange;
    }
    public get ipRange(): string | undefined {
        return this['ip_range'];
    }
    public withIpType(ipType: AddTrustedIpAddressResponseIpTypeEnum | number): AddTrustedIpAddressResponse {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: AddTrustedIpAddressResponseIpTypeEnum | number  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): AddTrustedIpAddressResponseIpTypeEnum | number | undefined {
        return this['ip_type'];
    }
    public withIpStart(ipStart: string): AddTrustedIpAddressResponse {
        this['ip_start'] = ipStart;
        return this;
    }
    public set ipStart(ipStart: string  | undefined) {
        this['ip_start'] = ipStart;
    }
    public get ipStart(): string | undefined {
        return this['ip_start'];
    }
    public withIpEnd(ipEnd: string): AddTrustedIpAddressResponse {
        this['ip_end'] = ipEnd;
        return this;
    }
    public set ipEnd(ipEnd: string  | undefined) {
        this['ip_end'] = ipEnd;
    }
    public get ipEnd(): string | undefined {
        return this['ip_end'];
    }
    public withViewFlag(viewFlag: AddTrustedIpAddressResponseViewFlagEnum | number): AddTrustedIpAddressResponse {
        this['view_flag'] = viewFlag;
        return this;
    }
    public set viewFlag(viewFlag: AddTrustedIpAddressResponseViewFlagEnum | number  | undefined) {
        this['view_flag'] = viewFlag;
    }
    public get viewFlag(): AddTrustedIpAddressResponseViewFlagEnum | number | undefined {
        return this['view_flag'];
    }
    public withDownloadFlag(downloadFlag: AddTrustedIpAddressResponseDownloadFlagEnum | number): AddTrustedIpAddressResponse {
        this['download_flag'] = downloadFlag;
        return this;
    }
    public set downloadFlag(downloadFlag: AddTrustedIpAddressResponseDownloadFlagEnum | number  | undefined) {
        this['download_flag'] = downloadFlag;
    }
    public get downloadFlag(): AddTrustedIpAddressResponseDownloadFlagEnum | number | undefined {
        return this['download_flag'];
    }
    public withUploadFlag(uploadFlag: AddTrustedIpAddressResponseUploadFlagEnum | number): AddTrustedIpAddressResponse {
        this['upload_flag'] = uploadFlag;
        return this;
    }
    public set uploadFlag(uploadFlag: AddTrustedIpAddressResponseUploadFlagEnum | number  | undefined) {
        this['upload_flag'] = uploadFlag;
    }
    public get uploadFlag(): AddTrustedIpAddressResponseUploadFlagEnum | number | undefined {
        return this['upload_flag'];
    }
    public withRemark(remark: string): AddTrustedIpAddressResponse {
        this['remark'] = remark;
        return this;
    }
    public withCreatedAt(createdAt: string): AddTrustedIpAddressResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): AddTrustedIpAddressResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withOrderFlag(orderFlag: AddTrustedIpAddressResponseOrderFlagEnum | number): AddTrustedIpAddressResponse {
        this['order_flag'] = orderFlag;
        return this;
    }
    public set orderFlag(orderFlag: AddTrustedIpAddressResponseOrderFlagEnum | number  | undefined) {
        this['order_flag'] = orderFlag;
    }
    public get orderFlag(): AddTrustedIpAddressResponseOrderFlagEnum | number | undefined {
        return this['order_flag'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddTrustedIpAddressResponseIpTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum AddTrustedIpAddressResponseViewFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum AddTrustedIpAddressResponseDownloadFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum AddTrustedIpAddressResponseUploadFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum AddTrustedIpAddressResponseOrderFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
