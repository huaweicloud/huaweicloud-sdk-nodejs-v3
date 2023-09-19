import { BindPublicReqEipBandWidth } from './BindPublicReqEipBandWidth';


export class BindPublicReqEipReq {
    public bandWidth?: BindPublicReqEipBandWidth;
    public isAutoPay?: number;
    public constructor(bandWidth?: BindPublicReqEipBandWidth) { 
        this['bandWidth'] = bandWidth;
    }
    public withBandWidth(bandWidth: BindPublicReqEipBandWidth): BindPublicReqEipReq {
        this['bandWidth'] = bandWidth;
        return this;
    }
    public withIsAutoPay(isAutoPay: number): BindPublicReqEipReq {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
}