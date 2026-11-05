

export class SwitchSupabaseApplicationEipBindRequestBody {
    private 'is_bind'?: boolean;
    private 'public_ip_address'?: string;
    private 'public_ip_id'?: string;
    public constructor(isBind?: boolean) { 
        this['is_bind'] = isBind;
    }
    public withIsBind(isBind: boolean): SwitchSupabaseApplicationEipBindRequestBody {
        this['is_bind'] = isBind;
        return this;
    }
    public set isBind(isBind: boolean  | undefined) {
        this['is_bind'] = isBind;
    }
    public get isBind(): boolean | undefined {
        return this['is_bind'];
    }
    public withPublicIpAddress(publicIpAddress: string): SwitchSupabaseApplicationEipBindRequestBody {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: string  | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress(): string | undefined {
        return this['public_ip_address'];
    }
    public withPublicIpId(publicIpId: string): SwitchSupabaseApplicationEipBindRequestBody {
        this['public_ip_id'] = publicIpId;
        return this;
    }
    public set publicIpId(publicIpId: string  | undefined) {
        this['public_ip_id'] = publicIpId;
    }
    public get publicIpId(): string | undefined {
        return this['public_ip_id'];
    }
}