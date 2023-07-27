import { BandWidth } from './BandWidth';
import { ExtendParamEip } from './ExtendParamEip';


export class Eip {
    public iptype?: EipIptypeEnum | string;
    public bandwidth?: BandWidth;
    public extendparam?: ExtendParamEip;
    public constructor(iptype?: string, bandwidth?: BandWidth, extendparam?: ExtendParamEip) { 
        this['iptype'] = iptype;
        this['bandwidth'] = bandwidth;
        this['extendparam'] = extendparam;
    }
    public withIptype(iptype: EipIptypeEnum | string): Eip {
        this['iptype'] = iptype;
        return this;
    }
    public withBandwidth(bandwidth: BandWidth): Eip {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withExtendparam(extendparam: ExtendParamEip): Eip {
        this['extendparam'] = extendparam;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EipIptypeEnum {
    E_5_BGP = '5_bgp',
    E_5_SBGP = '5_sbgp'
}
