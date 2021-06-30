import { V3NodeBandwidth } from './V3NodeBandwidth';


export class V3NodeEIPSpec {
    public iptype?: string;
    public bandwidth?: V3NodeBandwidth;
    public constructor() { 
    }
    public withIptype(iptype: string): V3NodeEIPSpec {
        this['iptype'] = iptype;
        return this;
    }
    public withBandwidth(bandwidth: V3NodeBandwidth): V3NodeEIPSpec {
        this['bandwidth'] = bandwidth;
        return this;
    }
}