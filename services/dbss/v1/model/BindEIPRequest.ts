

export class BindEIPRequest {
    public eip?: string;
    private 'eip_id'?: string;
    public constructor(eip?: string, eipId?: string) { 
        this['eip'] = eip;
        this['eip_id'] = eipId;
    }
    public withEip(eip: string): BindEIPRequest {
        this['eip'] = eip;
        return this;
    }
    public withEipId(eipId: string): BindEIPRequest {
        this['eip_id'] = eipId;
        return this;
    }
    public set eipId(eipId: string  | undefined) {
        this['eip_id'] = eipId;
    }
    public get eipId(): string | undefined {
        return this['eip_id'];
    }
}