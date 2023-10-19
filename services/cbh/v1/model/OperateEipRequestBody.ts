

export class OperateEipRequestBody {
    private 'publicip_id'?: string;
    private 'public_eip'?: string;
    public constructor(publicipId?: string, publicEip?: string) { 
        this['publicip_id'] = publicipId;
        this['public_eip'] = publicEip;
    }
    public withPublicipId(publicipId: string): OperateEipRequestBody {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withPublicEip(publicEip: string): OperateEipRequestBody {
        this['public_eip'] = publicEip;
        return this;
    }
    public set publicEip(publicEip: string  | undefined) {
        this['public_eip'] = publicEip;
    }
    public get publicEip(): string | undefined {
        return this['public_eip'];
    }
}