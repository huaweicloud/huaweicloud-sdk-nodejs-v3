import { PrePaidServerEipBandwidth } from './PrePaidServerEipBandwidth';
import { PrePaidServerEipExtendParam } from './PrePaidServerEipExtendParam';


export class PrePaidServerEip {
    public iptype: string;
    public bandwidth: PrePaidServerEipBandwidth;
    public extendparam?: PrePaidServerEipExtendParam;
    public constructor(iptype?: any, bandwidth?: any) { 
        this['iptype'] = iptype;
        this['bandwidth'] = bandwidth;
    }
    public withIptype(iptype: string): PrePaidServerEip {
        this['iptype'] = iptype;
        return this;
    }
    public withBandwidth(bandwidth: PrePaidServerEipBandwidth): PrePaidServerEip {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withExtendparam(extendparam: PrePaidServerEipExtendParam): PrePaidServerEip {
        this['extendparam'] = extendparam;
        return this;
    }
}