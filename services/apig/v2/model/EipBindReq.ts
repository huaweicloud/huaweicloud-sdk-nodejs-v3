

export class EipBindReq {
    private 'eip_id'?: string;
    public constructor() { 
    }
    public withEipId(eipId: string): EipBindReq {
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