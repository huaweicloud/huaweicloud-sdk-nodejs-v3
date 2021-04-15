

export class PostPaidServerEipBandwidth {
    public size?: number;
    public sharetype: PostPaidServerEipBandwidthSharetypeEnum;
    public chargemode?: string;
    public id?: string;
    public constructor(sharetype?: any) { 
        this['sharetype'] = sharetype;
    }
    public withSize(size: number): PostPaidServerEipBandwidth {
        this['size'] = size;
        return this;
    }
    public withSharetype(sharetype: PostPaidServerEipBandwidthSharetypeEnum): PostPaidServerEipBandwidth {
        this['sharetype'] = sharetype;
        return this;
    }
    public withChargemode(chargemode: string): PostPaidServerEipBandwidth {
        this['chargemode'] = chargemode;
        return this;
    }
    public withId(id: string): PostPaidServerEipBandwidth {
        this['id'] = id;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PostPaidServerEipBandwidthSharetypeEnum {
    PER = 'PER',
    WHOLE = 'WHOLE'
}
