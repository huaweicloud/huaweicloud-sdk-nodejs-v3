

export class UpdateClientIpTransparentTransmissionRequestBody {
    private 'transparent_client_ip_enable'?: boolean;
    public constructor() { 
    }
    public withTransparentClientIpEnable(transparentClientIpEnable: boolean): UpdateClientIpTransparentTransmissionRequestBody {
        this['transparent_client_ip_enable'] = transparentClientIpEnable;
        return this;
    }
    public set transparentClientIpEnable(transparentClientIpEnable: boolean  | undefined) {
        this['transparent_client_ip_enable'] = transparentClientIpEnable;
    }
    public get transparentClientIpEnable(): boolean | undefined {
        return this['transparent_client_ip_enable'];
    }
}