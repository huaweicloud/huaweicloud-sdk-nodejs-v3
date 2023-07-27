

export class BandWidth {
    public name?: string;
    public sharetype?: BandWidthSharetypeEnum | string;
    public id?: string;
    public size?: number;
    public chargemode?: BandWidthChargemodeEnum | string;
    public constructor(sharetype?: string, size?: number) { 
        this['sharetype'] = sharetype;
        this['size'] = size;
    }
    public withName(name: string): BandWidth {
        this['name'] = name;
        return this;
    }
    public withSharetype(sharetype: BandWidthSharetypeEnum | string): BandWidth {
        this['sharetype'] = sharetype;
        return this;
    }
    public withId(id: string): BandWidth {
        this['id'] = id;
        return this;
    }
    public withSize(size: number): BandWidth {
        this['size'] = size;
        return this;
    }
    public withChargemode(chargemode: BandWidthChargemodeEnum | string): BandWidth {
        this['chargemode'] = chargemode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BandWidthSharetypeEnum {
    PER = 'PER',
    WHOLE = 'WHOLE'
}
/**
    * @export
    * @enum {string}
    */
export enum BandWidthChargemodeEnum {
    TRAFFIC = 'traffic',
    BANDWIDTH = 'bandwidth'
}
