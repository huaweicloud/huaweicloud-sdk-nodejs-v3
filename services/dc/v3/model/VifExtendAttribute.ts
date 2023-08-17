

export class VifExtendAttribute {
    private 'ha_type'?: VifExtendAttributeHaTypeEnum | string;
    private 'ha_mode'?: VifExtendAttributeHaModeEnum | string;
    private 'detect_multiplier'?: number;
    private 'min_rx_interval'?: number;
    private 'min_tx_interval'?: number;
    private 'remote_disclaim'?: number;
    private 'local_disclaim'?: number;
    public constructor() { 
    }
    public withHaType(haType: VifExtendAttributeHaTypeEnum | string): VifExtendAttribute {
        this['ha_type'] = haType;
        return this;
    }
    public set haType(haType: VifExtendAttributeHaTypeEnum | string  | undefined) {
        this['ha_type'] = haType;
    }
    public get haType(): VifExtendAttributeHaTypeEnum | string | undefined {
        return this['ha_type'];
    }
    public withHaMode(haMode: VifExtendAttributeHaModeEnum | string): VifExtendAttribute {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: VifExtendAttributeHaModeEnum | string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): VifExtendAttributeHaModeEnum | string | undefined {
        return this['ha_mode'];
    }
    public withDetectMultiplier(detectMultiplier: number): VifExtendAttribute {
        this['detect_multiplier'] = detectMultiplier;
        return this;
    }
    public set detectMultiplier(detectMultiplier: number  | undefined) {
        this['detect_multiplier'] = detectMultiplier;
    }
    public get detectMultiplier(): number | undefined {
        return this['detect_multiplier'];
    }
    public withMinRxInterval(minRxInterval: number): VifExtendAttribute {
        this['min_rx_interval'] = minRxInterval;
        return this;
    }
    public set minRxInterval(minRxInterval: number  | undefined) {
        this['min_rx_interval'] = minRxInterval;
    }
    public get minRxInterval(): number | undefined {
        return this['min_rx_interval'];
    }
    public withMinTxInterval(minTxInterval: number): VifExtendAttribute {
        this['min_tx_interval'] = minTxInterval;
        return this;
    }
    public set minTxInterval(minTxInterval: number  | undefined) {
        this['min_tx_interval'] = minTxInterval;
    }
    public get minTxInterval(): number | undefined {
        return this['min_tx_interval'];
    }
    public withRemoteDisclaim(remoteDisclaim: number): VifExtendAttribute {
        this['remote_disclaim'] = remoteDisclaim;
        return this;
    }
    public set remoteDisclaim(remoteDisclaim: number  | undefined) {
        this['remote_disclaim'] = remoteDisclaim;
    }
    public get remoteDisclaim(): number | undefined {
        return this['remote_disclaim'];
    }
    public withLocalDisclaim(localDisclaim: number): VifExtendAttribute {
        this['local_disclaim'] = localDisclaim;
        return this;
    }
    public set localDisclaim(localDisclaim: number  | undefined) {
        this['local_disclaim'] = localDisclaim;
    }
    public get localDisclaim(): number | undefined {
        return this['local_disclaim'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VifExtendAttributeHaTypeEnum {
    NQA = 'nqa',
    BFD = 'bfd'
}
/**
    * @export
    * @enum {string}
    */
export enum VifExtendAttributeHaModeEnum {
    AUTO_SINGLE = 'auto_single',
    AUTO_MULTI = 'auto_multi',
    STATIC_SINGLE = 'static_single',
    STATIC_MULTI = 'static_multi',
    ENHANCE_NQA = 'enhance_nqa'
}
