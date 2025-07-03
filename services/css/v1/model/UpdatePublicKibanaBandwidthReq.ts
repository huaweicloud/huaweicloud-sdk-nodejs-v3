import { UpdatePublicKibanaBandwidthReqBandWidth } from './UpdatePublicKibanaBandwidthReqBandWidth';


export class UpdatePublicKibanaBandwidthReq {
    private 'band_width'?: UpdatePublicKibanaBandwidthReqBandWidth;
    private 'is_auto_pay'?: number;
    public constructor(bandWidth?: UpdatePublicKibanaBandwidthReqBandWidth) { 
        this['band_width'] = bandWidth;
    }
    public withBandWidth(bandWidth: UpdatePublicKibanaBandwidthReqBandWidth): UpdatePublicKibanaBandwidthReq {
        this['band_width'] = bandWidth;
        return this;
    }
    public set bandWidth(bandWidth: UpdatePublicKibanaBandwidthReqBandWidth  | undefined) {
        this['band_width'] = bandWidth;
    }
    public get bandWidth(): UpdatePublicKibanaBandwidthReqBandWidth | undefined {
        return this['band_width'];
    }
    public withIsAutoPay(isAutoPay: number): UpdatePublicKibanaBandwidthReq {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: number  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): number | undefined {
        return this['is_auto_pay'];
    }
}