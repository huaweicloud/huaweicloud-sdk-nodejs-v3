import { CreateRouteTableReq } from './CreateRouteTableReq';


export class CreateRoutetableReqBody {
    public routetable: CreateRouteTableReq;
    public constructor(routetable?: any) { 
        this['routetable'] = routetable;
    }
    public withRoutetable(routetable: CreateRouteTableReq): CreateRoutetableReqBody {
        this['routetable'] = routetable;
        return this;
    }
}