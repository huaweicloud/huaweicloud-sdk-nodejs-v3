import { BindPublicReqEipBandWidth } from './BindPublicReqEipBandWidth';


export class BindPublicReqEip {
    public bandWidth?: BindPublicReqEipBandWidth;
    public constructor(bandWidth?: BindPublicReqEipBandWidth) { 
        this['bandWidth'] = bandWidth;
    }
    public withBandWidth(bandWidth: BindPublicReqEipBandWidth): BindPublicReqEip {
        this['bandWidth'] = bandWidth;
        return this;
    }
}