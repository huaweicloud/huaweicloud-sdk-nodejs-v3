

export class ListInternetBandwidthLimitsRequest {
    public fields?: Array<ListInternetBandwidthLimitsRequestFieldsEnum> | Array<string>;
    private 'sort_key'?: Array<ListInternetBandwidthLimitsRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListInternetBandwidthLimitsRequestSortDirEnum> | Array<string>;
    private 'charge_mode'?: Array<ListInternetBandwidthLimitsRequestChargeModeEnum> | Array<string>;
    public type?: string;
    public constructor() { 
    }
    public withFields(fields: Array<ListInternetBandwidthLimitsRequestFieldsEnum> | Array<string>): ListInternetBandwidthLimitsRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortKey(sortKey: Array<ListInternetBandwidthLimitsRequestSortKeyEnum> | Array<string>): ListInternetBandwidthLimitsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListInternetBandwidthLimitsRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListInternetBandwidthLimitsRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListInternetBandwidthLimitsRequestSortDirEnum> | Array<string>): ListInternetBandwidthLimitsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListInternetBandwidthLimitsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListInternetBandwidthLimitsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withChargeMode(chargeMode: Array<ListInternetBandwidthLimitsRequestChargeModeEnum> | Array<string>): ListInternetBandwidthLimitsRequest {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: Array<ListInternetBandwidthLimitsRequestChargeModeEnum> | Array<string>  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): Array<ListInternetBandwidthLimitsRequestChargeModeEnum> | Array<string> | undefined {
        return this['charge_mode'];
    }
    public withType(type: string): ListInternetBandwidthLimitsRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInternetBandwidthLimitsRequestFieldsEnum {
    ID = 'id',
    CHARGE_MODE = 'charge_mode',
    MIN_SIZE = 'min_size',
    EXT_LIMIT = 'ext_limit',
    MAX_SIZE = 'max_size'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInternetBandwidthLimitsRequestSortKeyEnum {
    ID = 'id'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInternetBandwidthLimitsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInternetBandwidthLimitsRequestChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    E_95PEAK_BIDIRECTION = '95peak_bidirection',
    E_95PEAK_PLUS_1000 = '95peak_plus_1000',
    E_95PEAK_GUAR = '95peak_guar'
}
