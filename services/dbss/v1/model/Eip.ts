import { BandWidth } from './BandWidth';


export class Eip {
    public bandwidth?: BandWidth;
    public ipproductid?: string;
    public iptype?: string;
    public constructor() { 
    }
    public withBandwidth(bandwidth: BandWidth): Eip {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withIpproductid(ipproductid: string): Eip {
        this['ipproductid'] = ipproductid;
        return this;
    }
    public withIptype(iptype: string): Eip {
        this['iptype'] = iptype;
        return this;
    }
}