import { V3NodeEIPSpec } from './V3NodeEIPSpec';


export class V3NodePublicIP {
    public ids?: Array<string>;
    public count?: number;
    public eip?: V3NodeEIPSpec;
    public constructor() { 
    }
    public withIds(ids: Array<string>): V3NodePublicIP {
        this['ids'] = ids;
        return this;
    }
    public withCount(count: number): V3NodePublicIP {
        this['count'] = count;
        return this;
    }
    public withEip(eip: V3NodeEIPSpec): V3NodePublicIP {
        this['eip'] = eip;
        return this;
    }
}