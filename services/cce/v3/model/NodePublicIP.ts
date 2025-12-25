import { NodeEIPSpec } from './NodeEIPSpec';


export class NodePublicIP {
    public ids?: Array<string>;
    public count?: number;
    public eip?: NodeEIPSpec;
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
}