import { PostPaidServerEipBandwidth } from './PostPaidServerEipBandwidth';
import { PostPaidServerEipExtendParam } from './PostPaidServerEipExtendParam';


export class PostPaidServerEip {
    public iptype: string;
    public bandwidth: PostPaidServerEipBandwidth;
    public extendparam?: PostPaidServerEipExtendParam;
    public constructor(iptype?: any, bandwidth?: any) { 
        this['iptype'] = iptype;
        this['bandwidth'] = bandwidth;
    }
    public withIptype(iptype: string): PostPaidServerEip {
        this['iptype'] = iptype;
        return this;
    }
    public withBandwidth(bandwidth: PostPaidServerEipBandwidth): PostPaidServerEip {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withExtendparam(extendparam: PostPaidServerEipExtendParam): PostPaidServerEip {
        this['extendparam'] = extendparam;
        return this;
    }
}