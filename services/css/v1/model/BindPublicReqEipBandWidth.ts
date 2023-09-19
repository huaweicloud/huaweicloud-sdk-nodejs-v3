

export class BindPublicReqEipBandWidth {
    public size?: number;
    public constructor(size?: number) { 
        this['size'] = size;
    }
    public withSize(size: number): BindPublicReqEipBandWidth {
        this['size'] = size;
        return this;
    }
}