

export class PublicIp {
    private 'public_bind_type': string | undefined;
    private 'eip_id'?: string | undefined;
    public constructor(publicBindType?: any) { 
        this['public_bind_type'] = publicBindType;
    }
    public withPublicBindType(publicBindType: string): PublicIp {
        this['public_bind_type'] = publicBindType;
        return this;
    }
    public set publicBindType(publicBindType: string | undefined) {
        this['public_bind_type'] = publicBindType;
    }
    public get publicBindType() {
        return this['public_bind_type'];
    }
    public withEipId(eipId: string): PublicIp {
        this['eip_id'] = eipId;
        return this;
    }
    public set eipId(eipId: string | undefined) {
        this['eip_id'] = eipId;
    }
    public get eipId() {
        return this['eip_id'];
    }
}