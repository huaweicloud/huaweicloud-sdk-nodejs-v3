

export class NodeBandwidth {
    public chargemode?: string;
    public size?: number;
    public sharetype?: string;
    public constructor() { 
    }
    public withChargemode(chargemode: string): NodeBandwidth {
        this['chargemode'] = chargemode;
        return this;
    }
    public withSize(size: number): NodeBandwidth {
        this['size'] = size;
        return this;
    }
    public withSharetype(sharetype: string): NodeBandwidth {
        this['sharetype'] = sharetype;
        return this;
    }
}