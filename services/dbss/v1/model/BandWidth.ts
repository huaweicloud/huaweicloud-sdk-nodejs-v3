

export class BandWidth {
    public chargemode?: string;
    public productid?: string;
    public sharetype?: string;
    public size?: number;
    public constructor() { 
    }
    public withChargemode(chargemode: string): BandWidth {
        this['chargemode'] = chargemode;
        return this;
    }
    public withProductid(productid: string): BandWidth {
        this['productid'] = productid;
        return this;
    }
    public withSharetype(sharetype: string): BandWidth {
        this['sharetype'] = sharetype;
        return this;
    }
    public withSize(size: number): BandWidth {
        this['size'] = size;
        return this;
    }
}