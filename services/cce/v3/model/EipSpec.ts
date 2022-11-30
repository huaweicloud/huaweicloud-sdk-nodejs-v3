import { EipSpecBandwidth } from './EipSpecBandwidth';


export class EipSpec {
    public bandwidth?: EipSpecBandwidth;
    public constructor() { 
    }
    public withBandwidth(bandwidth: EipSpecBandwidth): EipSpec {
        this['bandwidth'] = bandwidth;
        return this;
    }
}