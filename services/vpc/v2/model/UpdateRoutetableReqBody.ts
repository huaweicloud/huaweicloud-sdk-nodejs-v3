import { UpdateRouteTableReq } from './UpdateRouteTableReq';


export class UpdateRoutetableReqBody {
    public routetable: UpdateRouteTableReq;
    public constructor(routetable?: any) { 
        this['routetable'] = routetable;
    }
    public withRoutetable(routetable: UpdateRouteTableReq): UpdateRoutetableReqBody {
        this['routetable'] = routetable;
        return this;
    }
}