import { BindPublicReqEipBandWidth } from './BindPublicReqEipBandWidth';


export class UnBindPublicReqEipReq {
    public bandWidth?: BindPublicReqEipBandWidth;
    public constructor() { 
    }
    public withBandWidth(bandWidth: BindPublicReqEipBandWidth): UnBindPublicReqEipReq {
        this['bandWidth'] = bandWidth;
        return this;
    }
}