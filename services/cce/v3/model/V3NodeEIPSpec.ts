import { V3NodeBandwidth } from './V3NodeBandwidth';


export class V3NodeEIPSpec {
    public bandwidth?: V3NodeBandwidth;
    public iptype?: string;
    public constructor() { 
    }
    public withBandwidth(bandwidth: V3NodeBandwidth): V3NodeEIPSpec {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withIptype(iptype: string): V3NodeEIPSpec {
        this['iptype'] = iptype;
        return this;
    }
}