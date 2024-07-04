

export class SrFlavorResizeReq {
    private 'fe_flavor_id'?: string;
    private 'be_flavor_id'?: string;
    public constructor() { 
    }
    public withFeFlavorId(feFlavorId: string): SrFlavorResizeReq {
        this['fe_flavor_id'] = feFlavorId;
        return this;
    }
    public set feFlavorId(feFlavorId: string  | undefined) {
        this['fe_flavor_id'] = feFlavorId;
    }
    public get feFlavorId(): string | undefined {
        return this['fe_flavor_id'];
    }
    public withBeFlavorId(beFlavorId: string): SrFlavorResizeReq {
        this['be_flavor_id'] = beFlavorId;
        return this;
    }
    public set beFlavorId(beFlavorId: string  | undefined) {
        this['be_flavor_id'] = beFlavorId;
    }
    public get beFlavorId(): string | undefined {
        return this['be_flavor_id'];
    }
}