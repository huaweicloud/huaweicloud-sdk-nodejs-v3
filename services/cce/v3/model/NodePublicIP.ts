import { NodeBandwidth } from './NodeBandwidth';
import { NodeEIPSpec } from './NodeEIPSpec';


export class NodePublicIP {
    public ids?: Array<string>;
    public count?: number;
    public eip?: NodeEIPSpec;
    public iptype?: string;
    public bandwidth?: NodeBandwidth;
    public constructor() { 
    }
    public withIds(ids: Array<string>): NodePublicIP {
        this['ids'] = ids;
        return this;
    }
    public withCount(count: number): NodePublicIP {
        this['count'] = count;
        return this;
    }
    public withEip(eip: NodeEIPSpec): NodePublicIP {
        this['eip'] = eip;
        return this;
    }
    public withIptype(iptype: string): NodePublicIP {
        this['iptype'] = iptype;
        return this;
    }
    public withBandwidth(bandwidth: NodeBandwidth): NodePublicIP {
        this['bandwidth'] = bandwidth;
        return this;
    }
}