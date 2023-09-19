import { ExtendClusterGrowReq } from './ExtendClusterGrowReq';


export class ExtendClusterReq {
    public grow?: ExtendClusterGrowReq;
    public isAutoPay?: number;
    public constructor(grow?: ExtendClusterGrowReq) { 
        this['grow'] = grow;
    }
    public withGrow(grow: ExtendClusterGrowReq): ExtendClusterReq {
        this['grow'] = grow;
        return this;
    }
    public withIsAutoPay(isAutoPay: number): ExtendClusterReq {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
}