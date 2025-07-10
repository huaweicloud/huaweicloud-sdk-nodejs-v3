

export class AddTrustedIpAddressRequestBody {
    private 'ip_type'?: number;
    private 'ip_start'?: string;
    private 'ip_end'?: string;
    private 'view_flag'?: number;
    private 'download_flag'?: number;
    private 'upload_flag'?: number;
    public remark?: string;
    public constructor() { 
    }
    public withIpType(ipType: number): AddTrustedIpAddressRequestBody {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: number  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): number | undefined {
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
    public withViewFlag(viewFlag: number): AddTrustedIpAddressRequestBody {
        this['view_flag'] = viewFlag;
        return this;
    }
    public set viewFlag(viewFlag: number  | undefined) {
        this['view_flag'] = viewFlag;
    }
    public get viewFlag(): number | undefined {
        return this['view_flag'];
    }
    public withDownloadFlag(downloadFlag: number): AddTrustedIpAddressRequestBody {
        this['download_flag'] = downloadFlag;
        return this;
    }
    public set downloadFlag(downloadFlag: number  | undefined) {
        this['download_flag'] = downloadFlag;
    }
    public get downloadFlag(): number | undefined {
        return this['download_flag'];
    }
    public withUploadFlag(uploadFlag: number): AddTrustedIpAddressRequestBody {
        this['upload_flag'] = uploadFlag;
        return this;
    }
    public set uploadFlag(uploadFlag: number  | undefined) {
        this['upload_flag'] = uploadFlag;
    }
    public get uploadFlag(): number | undefined {
        return this['upload_flag'];
    }
    public withRemark(remark: string): AddTrustedIpAddressRequestBody {
        this['remark'] = remark;
        return this;
    }
}