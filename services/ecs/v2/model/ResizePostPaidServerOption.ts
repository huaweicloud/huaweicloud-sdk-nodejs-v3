

export class ResizePostPaidServerOption {
    public flavorRef: string;
    public mode?: string;
    public constructor(flavorRef?: any) { 
        this['flavorRef'] = flavorRef;
    }
    public withFlavorRef(flavorRef: string): ResizePostPaidServerOption {
        this['flavorRef'] = flavorRef;
        return this;
    }
    public withMode(mode: string): ResizePostPaidServerOption {
        this['mode'] = mode;
        return this;
    }
}