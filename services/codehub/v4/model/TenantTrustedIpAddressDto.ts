

export class TenantTrustedIpAddressDto {
    public id?: string;
    private 'user_id'?: number;
    private 'domain_id'?: string;
    private 'ip_range'?: string;
    private 'ip_type'?: TenantTrustedIpAddressDtoIpTypeEnum | number;
    private 'ip_start'?: string;
    private 'ip_end'?: string;
    private 'view_flag'?: TenantTrustedIpAddressDtoViewFlagEnum | number;
    private 'download_flag'?: TenantTrustedIpAddressDtoDownloadFlagEnum | number;
    private 'upload_flag'?: TenantTrustedIpAddressDtoUploadFlagEnum | number;
    public remark?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'order_flag'?: TenantTrustedIpAddressDtoOrderFlagEnum | number;
    public constructor() { 
    }
    public withId(id: string): TenantTrustedIpAddressDto {
        this['id'] = id;
        return this;
    }
    public withUserId(userId: number): TenantTrustedIpAddressDto {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: number  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): number | undefined {
        return this['user_id'];
    }
    public withDomainId(domainId: string): TenantTrustedIpAddressDto {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withIpRange(ipRange: string): TenantTrustedIpAddressDto {
        this['ip_range'] = ipRange;
        return this;
    }
    public set ipRange(ipRange: string  | undefined) {
        this['ip_range'] = ipRange;
    }
    public get ipRange(): string | undefined {
        return this['ip_range'];
    }
    public withIpType(ipType: TenantTrustedIpAddressDtoIpTypeEnum | number): TenantTrustedIpAddressDto {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: TenantTrustedIpAddressDtoIpTypeEnum | number  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): TenantTrustedIpAddressDtoIpTypeEnum | number | undefined {
        return this['ip_type'];
    }
    public withIpStart(ipStart: string): TenantTrustedIpAddressDto {
        this['ip_start'] = ipStart;
        return this;
    }
    public set ipStart(ipStart: string  | undefined) {
        this['ip_start'] = ipStart;
    }
    public get ipStart(): string | undefined {
        return this['ip_start'];
    }
    public withIpEnd(ipEnd: string): TenantTrustedIpAddressDto {
        this['ip_end'] = ipEnd;
        return this;
    }
    public set ipEnd(ipEnd: string  | undefined) {
        this['ip_end'] = ipEnd;
    }
    public get ipEnd(): string | undefined {
        return this['ip_end'];
    }
    public withViewFlag(viewFlag: TenantTrustedIpAddressDtoViewFlagEnum | number): TenantTrustedIpAddressDto {
        this['view_flag'] = viewFlag;
        return this;
    }
    public set viewFlag(viewFlag: TenantTrustedIpAddressDtoViewFlagEnum | number  | undefined) {
        this['view_flag'] = viewFlag;
    }
    public get viewFlag(): TenantTrustedIpAddressDtoViewFlagEnum | number | undefined {
        return this['view_flag'];
    }
    public withDownloadFlag(downloadFlag: TenantTrustedIpAddressDtoDownloadFlagEnum | number): TenantTrustedIpAddressDto {
        this['download_flag'] = downloadFlag;
        return this;
    }
    public set downloadFlag(downloadFlag: TenantTrustedIpAddressDtoDownloadFlagEnum | number  | undefined) {
        this['download_flag'] = downloadFlag;
    }
    public get downloadFlag(): TenantTrustedIpAddressDtoDownloadFlagEnum | number | undefined {
        return this['download_flag'];
    }
    public withUploadFlag(uploadFlag: TenantTrustedIpAddressDtoUploadFlagEnum | number): TenantTrustedIpAddressDto {
        this['upload_flag'] = uploadFlag;
        return this;
    }
    public set uploadFlag(uploadFlag: TenantTrustedIpAddressDtoUploadFlagEnum | number  | undefined) {
        this['upload_flag'] = uploadFlag;
    }
    public get uploadFlag(): TenantTrustedIpAddressDtoUploadFlagEnum | number | undefined {
        return this['upload_flag'];
    }
    public withRemark(remark: string): TenantTrustedIpAddressDto {
        this['remark'] = remark;
        return this;
    }
    public withCreatedAt(createdAt: string): TenantTrustedIpAddressDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): TenantTrustedIpAddressDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withOrderFlag(orderFlag: TenantTrustedIpAddressDtoOrderFlagEnum | number): TenantTrustedIpAddressDto {
        this['order_flag'] = orderFlag;
        return this;
    }
    public set orderFlag(orderFlag: TenantTrustedIpAddressDtoOrderFlagEnum | number  | undefined) {
        this['order_flag'] = orderFlag;
    }
    public get orderFlag(): TenantTrustedIpAddressDtoOrderFlagEnum | number | undefined {
        return this['order_flag'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TenantTrustedIpAddressDtoIpTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum TenantTrustedIpAddressDtoViewFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum TenantTrustedIpAddressDtoDownloadFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum TenantTrustedIpAddressDtoUploadFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum TenantTrustedIpAddressDtoOrderFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
