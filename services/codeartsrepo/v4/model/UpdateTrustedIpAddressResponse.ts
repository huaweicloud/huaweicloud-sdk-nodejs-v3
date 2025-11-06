
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTrustedIpAddressResponse extends SdkResponse {
    public id?: string;
    private 'repository_id'?: number;
    private 'ip_range'?: string;
    private 'ip_type'?: UpdateTrustedIpAddressResponseIpTypeEnum | number;
    private 'ip_start'?: string;
    private 'ip_end'?: string;
    private 'view_flag'?: UpdateTrustedIpAddressResponseViewFlagEnum | number;
    private 'download_flag'?: UpdateTrustedIpAddressResponseDownloadFlagEnum | number;
    private 'upload_flag'?: UpdateTrustedIpAddressResponseUploadFlagEnum | number;
    public remark?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'order_flag'?: UpdateTrustedIpAddressResponseOrderFlagEnum | number;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateTrustedIpAddressResponse {
        this['id'] = id;
        return this;
    }
    public withRepositoryId(repositoryId: number): UpdateTrustedIpAddressResponse {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withIpRange(ipRange: string): UpdateTrustedIpAddressResponse {
        this['ip_range'] = ipRange;
        return this;
    }
    public set ipRange(ipRange: string  | undefined) {
        this['ip_range'] = ipRange;
    }
    public get ipRange(): string | undefined {
        return this['ip_range'];
    }
    public withIpType(ipType: UpdateTrustedIpAddressResponseIpTypeEnum | number): UpdateTrustedIpAddressResponse {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: UpdateTrustedIpAddressResponseIpTypeEnum | number  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): UpdateTrustedIpAddressResponseIpTypeEnum | number | undefined {
        return this['ip_type'];
    }
    public withIpStart(ipStart: string): UpdateTrustedIpAddressResponse {
        this['ip_start'] = ipStart;
        return this;
    }
    public set ipStart(ipStart: string  | undefined) {
        this['ip_start'] = ipStart;
    }
    public get ipStart(): string | undefined {
        return this['ip_start'];
    }
    public withIpEnd(ipEnd: string): UpdateTrustedIpAddressResponse {
        this['ip_end'] = ipEnd;
        return this;
    }
    public set ipEnd(ipEnd: string  | undefined) {
        this['ip_end'] = ipEnd;
    }
    public get ipEnd(): string | undefined {
        return this['ip_end'];
    }
    public withViewFlag(viewFlag: UpdateTrustedIpAddressResponseViewFlagEnum | number): UpdateTrustedIpAddressResponse {
        this['view_flag'] = viewFlag;
        return this;
    }
    public set viewFlag(viewFlag: UpdateTrustedIpAddressResponseViewFlagEnum | number  | undefined) {
        this['view_flag'] = viewFlag;
    }
    public get viewFlag(): UpdateTrustedIpAddressResponseViewFlagEnum | number | undefined {
        return this['view_flag'];
    }
    public withDownloadFlag(downloadFlag: UpdateTrustedIpAddressResponseDownloadFlagEnum | number): UpdateTrustedIpAddressResponse {
        this['download_flag'] = downloadFlag;
        return this;
    }
    public set downloadFlag(downloadFlag: UpdateTrustedIpAddressResponseDownloadFlagEnum | number  | undefined) {
        this['download_flag'] = downloadFlag;
    }
    public get downloadFlag(): UpdateTrustedIpAddressResponseDownloadFlagEnum | number | undefined {
        return this['download_flag'];
    }
    public withUploadFlag(uploadFlag: UpdateTrustedIpAddressResponseUploadFlagEnum | number): UpdateTrustedIpAddressResponse {
        this['upload_flag'] = uploadFlag;
        return this;
    }
    public set uploadFlag(uploadFlag: UpdateTrustedIpAddressResponseUploadFlagEnum | number  | undefined) {
        this['upload_flag'] = uploadFlag;
    }
    public get uploadFlag(): UpdateTrustedIpAddressResponseUploadFlagEnum | number | undefined {
        return this['upload_flag'];
    }
    public withRemark(remark: string): UpdateTrustedIpAddressResponse {
        this['remark'] = remark;
        return this;
    }
    public withCreatedAt(createdAt: string): UpdateTrustedIpAddressResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): UpdateTrustedIpAddressResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withOrderFlag(orderFlag: UpdateTrustedIpAddressResponseOrderFlagEnum | number): UpdateTrustedIpAddressResponse {
        this['order_flag'] = orderFlag;
        return this;
    }
    public set orderFlag(orderFlag: UpdateTrustedIpAddressResponseOrderFlagEnum | number  | undefined) {
        this['order_flag'] = orderFlag;
    }
    public get orderFlag(): UpdateTrustedIpAddressResponseOrderFlagEnum | number | undefined {
        return this['order_flag'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateTrustedIpAddressResponseIpTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateTrustedIpAddressResponseViewFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateTrustedIpAddressResponseDownloadFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateTrustedIpAddressResponseUploadFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateTrustedIpAddressResponseOrderFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
