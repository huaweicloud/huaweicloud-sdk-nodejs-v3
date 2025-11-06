

export class PublicIp {
    private 'public_bind_type'?: string;
    private 'eip_id'?: string;
    private 'ip_type'?: string;
    private 'eip_address'?: string;
    private 'band_width'?: number;
    public status?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withPublicBindType(publicBindType: string): PublicIp {
        this['public_bind_type'] = publicBindType;
        return this;
    }
    public set publicBindType(publicBindType: string  | undefined) {
        this['public_bind_type'] = publicBindType;
    }
    public get publicBindType(): string | undefined {
        return this['public_bind_type'];
    }
    public withEipId(eipId: string): PublicIp {
        this['eip_id'] = eipId;
        return this;
    }
    public set eipId(eipId: string  | undefined) {
        this['eip_id'] = eipId;
    }
    public get eipId(): string | undefined {
        return this['eip_id'];
    }
    public withIpType(ipType: string): PublicIp {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: string  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): string | undefined {
        return this['ip_type'];
    }
    public withEipAddress(eipAddress: string): PublicIp {
        this['eip_address'] = eipAddress;
        return this;
    }
    public set eipAddress(eipAddress: string  | undefined) {
        this['eip_address'] = eipAddress;
    }
    public get eipAddress(): string | undefined {
        return this['eip_address'];
    }
    public withBandWidth(bandWidth: number): PublicIp {
        this['band_width'] = bandWidth;
        return this;
    }
    public set bandWidth(bandWidth: number  | undefined) {
        this['band_width'] = bandWidth;
    }
    public get bandWidth(): number | undefined {
        return this['band_width'];
    }
    public withStatus(status: string): PublicIp {
        this['status'] = status;
        return this;
    }
    public withErrorMessage(errorMessage: string): PublicIp {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}