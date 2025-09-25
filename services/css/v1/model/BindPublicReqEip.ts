import { BindPublicReqEipBandWidth } from './BindPublicReqEipBandWidth';


export class BindPublicReqEip {
    private 'band_width'?: BindPublicReqEipBandWidth;
    public constructor() { 
    }
    public withBandWidth(bandWidth: BindPublicReqEipBandWidth): BindPublicReqEip {
        this['band_width'] = bandWidth;
        return this;
    }
    public set bandWidth(bandWidth: BindPublicReqEipBandWidth  | undefined) {
        this['band_width'] = bandWidth;
    }
    public get bandWidth(): BindPublicReqEipBandWidth | undefined {
        return this['band_width'];
    }
}