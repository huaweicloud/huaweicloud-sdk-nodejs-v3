

export class AddTrustedIpAddressRequestBody {
    private 'ip_type'?: AddTrustedIpAddressRequestBodyIpTypeEnum | number;
    private 'ip_start'?: string;
    private 'ip_end'?: string;
    private 'view_flag'?: AddTrustedIpAddressRequestBodyViewFlagEnum | number;
    private 'download_flag'?: AddTrustedIpAddressRequestBodyDownloadFlagEnum | number;
    private 'upload_flag'?: AddTrustedIpAddressRequestBodyUploadFlagEnum | number;
    public remark?: string;
    public constructor() { 
    }
    public withIpType(ipType: AddTrustedIpAddressRequestBodyIpTypeEnum | number): AddTrustedIpAddressRequestBody {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: AddTrustedIpAddressRequestBodyIpTypeEnum | number  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): AddTrustedIpAddressRequestBodyIpTypeEnum | number | undefined {
        return this['ip_type'];
    }
    public withIpStart(ipStart: string): AddTrustedIpAddressRequestBody {
        this['ip_start'] = ipStart;
        return this;
    }
    public set ipStart(ipStart: string  | undefined) {
        this['ip_start'] = ipStart;
    }
    public get ipStart(): string | undefined {
        return this['ip_start'];
    }
    public withIpEnd(ipEnd: string): AddTrustedIpAddressRequestBody {
        this['ip_end'] = ipEnd;
        return this;
    }
    public set ipEnd(ipEnd: string  | undefined) {
        this['ip_end'] = ipEnd;
    }
    public get ipEnd(): string | undefined {
        return this['ip_end'];
    }
    public withViewFlag(viewFlag: AddTrustedIpAddressRequestBodyViewFlagEnum | number): AddTrustedIpAddressRequestBody {
        this['view_flag'] = viewFlag;
        return this;
    }
    public set viewFlag(viewFlag: AddTrustedIpAddressRequestBodyViewFlagEnum | number  | undefined) {
        this['view_flag'] = viewFlag;
    }
    public get viewFlag(): AddTrustedIpAddressRequestBodyViewFlagEnum | number | undefined {
        return this['view_flag'];
    }
    public withDownloadFlag(downloadFlag: AddTrustedIpAddressRequestBodyDownloadFlagEnum | number): AddTrustedIpAddressRequestBody {
        this['download_flag'] = downloadFlag;
        return this;
    }
    public set downloadFlag(downloadFlag: AddTrustedIpAddressRequestBodyDownloadFlagEnum | number  | undefined) {
        this['download_flag'] = downloadFlag;
    }
    public get downloadFlag(): AddTrustedIpAddressRequestBodyDownloadFlagEnum | number | undefined {
        return this['download_flag'];
    }
    public withUploadFlag(uploadFlag: AddTrustedIpAddressRequestBodyUploadFlagEnum | number): AddTrustedIpAddressRequestBody {
        this['upload_flag'] = uploadFlag;
        return this;
    }
    public set uploadFlag(uploadFlag: AddTrustedIpAddressRequestBodyUploadFlagEnum | number  | undefined) {
        this['upload_flag'] = uploadFlag;
    }
    public get uploadFlag(): AddTrustedIpAddressRequestBodyUploadFlagEnum | number | undefined {
        return this['upload_flag'];
    }
    public withRemark(remark: string): AddTrustedIpAddressRequestBody {
        this['remark'] = remark;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddTrustedIpAddressRequestBodyIpTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum AddTrustedIpAddressRequestBodyViewFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum AddTrustedIpAddressRequestBodyDownloadFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum AddTrustedIpAddressRequestBodyUploadFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
