

export class ModifyKafkaPublicIPAccessSwitchReq {
    private 'eip_address'?: string;
    private 'public_boundwidth'?: number;
    private 'publicip_id'?: string;
    public constructor() { 
    }
    public withEipAddress(eipAddress: string): ModifyKafkaPublicIPAccessSwitchReq {
        this['eip_address'] = eipAddress;
        return this;
    }
    public set eipAddress(eipAddress: string  | undefined) {
        this['eip_address'] = eipAddress;
    }
    public get eipAddress(): string | undefined {
        return this['eip_address'];
    }
    public withPublicBoundwidth(publicBoundwidth: number): ModifyKafkaPublicIPAccessSwitchReq {
        this['public_boundwidth'] = publicBoundwidth;
        return this;
    }
    public set publicBoundwidth(publicBoundwidth: number  | undefined) {
        this['public_boundwidth'] = publicBoundwidth;
    }
    public get publicBoundwidth(): number | undefined {
        return this['public_boundwidth'];
    }
    public withPublicipId(publicipId: string): ModifyKafkaPublicIPAccessSwitchReq {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
}