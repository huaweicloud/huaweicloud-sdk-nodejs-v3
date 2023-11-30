

export class ListBandwidthsLimitRequest {
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public fields?: Array<ListBandwidthsLimitRequestFieldsEnum> | Array<string>;
    private 'charge_mode'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListBandwidthsLimitRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListBandwidthsLimitRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListBandwidthsLimitRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListBandwidthsLimitRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withFields(fields: Array<ListBandwidthsLimitRequestFieldsEnum> | Array<string>): ListBandwidthsLimitRequest {
        this['fields'] = fields;
        return this;
    }
    public withChargeMode(chargeMode: string): ListBandwidthsLimitRequest {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListBandwidthsLimitRequestFieldsEnum {
    ID = 'id',
    CHARGE_MODE = 'charge_mode',
    MIN_SIZE = 'min_size',
    MAX_SIZE = 'max_size',
    EXT_LIMIT = 'ext_limit'
}
