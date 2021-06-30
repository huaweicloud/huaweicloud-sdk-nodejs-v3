

export class V3NodeBandwidth {
    public chargemode?: string;
    public size?: string;
    public sharetype?: string;
    public constructor() { 
    }
    public withChargemode(chargemode: string): V3NodeBandwidth {
        this['chargemode'] = chargemode;
        return this;
    }
    public withSize(size: string): V3NodeBandwidth {
        this['size'] = size;
        return this;
    }
    public withSharetype(sharetype: string): V3NodeBandwidth {
        this['sharetype'] = sharetype;
        return this;
    }
}