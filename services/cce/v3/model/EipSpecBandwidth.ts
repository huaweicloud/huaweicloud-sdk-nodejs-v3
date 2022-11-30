

export class EipSpecBandwidth {
    public size?: number;
    public sharetype?: EipSpecBandwidthSharetypeEnum;
    public constructor() { 
    }
    public withSize(size: number): EipSpecBandwidth {
        this['size'] = size;
        return this;
    }
    public withSharetype(sharetype: EipSpecBandwidthSharetypeEnum): EipSpecBandwidth {
        this['sharetype'] = sharetype;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EipSpecBandwidthSharetypeEnum {
    PER = 'PER',
    WHOLE = 'WHOLE'
}
