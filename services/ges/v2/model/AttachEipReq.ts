

export class AttachEipReq {
    private 'eip_id'?: string;
    public constructor(eipId?: string) { 
        this['eip_id'] = eipId;
    }
    public withEipId(eipId: string): AttachEipReq {
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