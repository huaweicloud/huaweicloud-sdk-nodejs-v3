

export class UpdatePublicKibanaBandwidthReqBandWidth {
    public size?: number;
    public constructor(size?: number) { 
        this['size'] = size;
    }
    public withSize(size: number): UpdatePublicKibanaBandwidthReqBandWidth {
        this['size'] = size;
        return this;
    }
}