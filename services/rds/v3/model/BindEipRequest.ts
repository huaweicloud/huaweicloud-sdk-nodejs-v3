

export class BindEipRequest {
    private 'public_ip'?: string;
    private 'public_ip_id'?: string;
    private 'is_bind'?: boolean;
    public constructor(isBind?: boolean) { 
        this['is_bind'] = isBind;
    }
    public withPublicIp(publicIp: string): BindEipRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPublicIpId(publicIpId: string): BindEipRequest {
        this['public_ip_id'] = publicIpId;
        return this;
    }
    public set publicIpId(publicIpId: string  | undefined) {
        this['public_ip_id'] = publicIpId;
    }
    public get publicIpId(): string | undefined {
        return this['public_ip_id'];
    }
    public withIsBind(isBind: boolean): BindEipRequest {
        this['is_bind'] = isBind;
        return this;
    }
    public set isBind(isBind: boolean  | undefined) {
        this['is_bind'] = isBind;
    }
    public get isBind(): boolean | undefined {
        return this['is_bind'];
    }
}