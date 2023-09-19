import { ShrinkNodeReq } from './ShrinkNodeReq';


export class ShrinkClusterReq {
    public shrink?: Array<ShrinkNodeReq>;
    public constructor(shrink?: Array<ShrinkNodeReq>) { 
        this['shrink'] = shrink;
    }
    public withShrink(shrink: Array<ShrinkNodeReq>): ShrinkClusterReq {
        this['shrink'] = shrink;
        return this;
    }
}