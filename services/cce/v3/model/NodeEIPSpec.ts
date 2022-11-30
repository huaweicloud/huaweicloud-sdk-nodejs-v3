import { NodeBandwidth } from './NodeBandwidth';


export class NodeEIPSpec {
    public iptype?: string;
    public bandwidth?: NodeBandwidth;
    public constructor() { 
    }
    public withIptype(iptype: string): NodeEIPSpec {
        this['iptype'] = iptype;
        return this;
    }
    public withBandwidth(bandwidth: NodeBandwidth): NodeEIPSpec {
        this['bandwidth'] = bandwidth;
        return this;
    }
}