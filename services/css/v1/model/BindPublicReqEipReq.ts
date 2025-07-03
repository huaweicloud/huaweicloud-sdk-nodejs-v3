import { BindPublicReqEipBandWidth } from './BindPublicReqEipBandWidth';


export class BindPublicReqEipReq {
    private 'band_width'?: BindPublicReqEipBandWidth;
    private 'is_auto_pay'?: number;
    public constructor(bandWidth?: BindPublicReqEipBandWidth) { 
        this['band_width'] = bandWidth;
    }
    public withBandWidth(bandWidth: BindPublicReqEipBandWidth): BindPublicReqEipReq {
        this['band_width'] = bandWidth;
        return this;
    }
    public set bandWidth(bandWidth: BindPublicReqEipBandWidth  | undefined) {
        this['band_width'] = bandWidth;
    }
    public get bandWidth(): BindPublicReqEipBandWidth | undefined {
        return this['band_width'];
    }
    public withIsAutoPay(isAutoPay: number): BindPublicReqEipReq {
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