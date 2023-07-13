

export class AttachEipReq {
    private 'eip_id': string | undefined;
    public constructor(eipId?: any) { 
        this['eip_id'] = eipId;
    }
    public withEipId(eipId: string): AttachEipReq {
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