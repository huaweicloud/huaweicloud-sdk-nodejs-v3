import { AsscoiateReq } from './AsscoiateReq';


export class RoutetableAssociateReqbody {
    public routetable: AsscoiateReq;
    public constructor(routetable?: any) { 
        this['routetable'] = routetable;
    }
    public withRoutetable(routetable: AsscoiateReq): RoutetableAssociateReqbody {
        this['routetable'] = routetable;
        return this;
    }
}