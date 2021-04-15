

export class PrePaidServerEipBandwidth {
    public size?: number;
    public sharetype: PrePaidServerEipBandwidthSharetypeEnum;
    public chargemode?: string;
    public id?: string;
    public constructor(sharetype?: any) { 
        this['sharetype'] = sharetype;
    }
    public withSize(size: number): PrePaidServerEipBandwidth {
        this['size'] = size;
        return this;
    }
    public withSharetype(sharetype: PrePaidServerEipBandwidthSharetypeEnum): PrePaidServerEipBandwidth {
        this['sharetype'] = sharetype;
        return this;
    }
    public withChargemode(chargemode: string): PrePaidServerEipBandwidth {
        this['chargemode'] = chargemode;
        return this;
    }
    public withId(id: string): PrePaidServerEipBandwidth {
        this['id'] = id;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrePaidServerEipBandwidthSharetypeEnum {
    PER = 'PER',
    WHOLE = 'WHOLE'
}
