

export class AssociateDesktopsEipReq {
    private 'eip_id'?: string;
    private 'desktop_id'?: string;
    public constructor(eipId?: string, desktopId?: string) { 
        this['eip_id'] = eipId;
        this['desktop_id'] = desktopId;
    }
    public withEipId(eipId: string): AssociateDesktopsEipReq {
        this['eip_id'] = eipId;
        return this;
    }
    public set eipId(eipId: string  | undefined) {
        this['eip_id'] = eipId;
    }
    public get eipId(): string | undefined {
        return this['eip_id'];
    }
    public withDesktopId(desktopId: string): AssociateDesktopsEipReq {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
}