import { UpdatePublicKibanaBandwidthReqBandWidth } from './UpdatePublicKibanaBandwidthReqBandWidth';


export class UpdatePublicKibanaBandwidthReq {
    public bandWidth?: UpdatePublicKibanaBandwidthReqBandWidth;
    public isAutoPay?: number;
    public constructor(bandWidth?: UpdatePublicKibanaBandwidthReqBandWidth) { 
        this['bandWidth'] = bandWidth;
    }
    public withBandWidth(bandWidth: UpdatePublicKibanaBandwidthReqBandWidth): UpdatePublicKibanaBandwidthReq {
        this['bandWidth'] = bandWidth;
        return this;
    }
    public withIsAutoPay(isAutoPay: number): UpdatePublicKibanaBandwidthReq {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
}